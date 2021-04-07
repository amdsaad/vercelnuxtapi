<template>
  <div class="admin-page ">
    <hero-side-nav />
    <div class="admin-content experirnceuid">
      <div class="add-event">
        <h4 v-if="experience">Add event to {{ experience.name }}</h4>
        <div class="admin-input-group">
          <label for="start_date">Experiance Starting Date</label>
          <input
            type="date"
            class="input-admin"
            v-model="start_date"
            name="start_date"
          />
        </div>
        <div class="admin-input-group">
          <label for="end_date">Experiance Ending Date</label>
          <input type="date" class="input-admin" v-model="end_date" />
        </div>
        <div class="admin-input-group">
          <label for="start_time">Experiance Starting Time</label>
          <input type="time" class="input-admin" v-model="start_time" />
        </div>
        <div class="admin-input-group">
          <label for="end_time">Experiance Ending Time</label>
          <input type="time" class="input-admin" v-model="end_time" />
        </div>
        <button class="add-btn" @click="add_events">Add Events</button>
      </div>
      <div class="calendar" v-if="experience">
        <FullCalendar :options="calendarOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import heroSideNav from "~/components/hero-side-nav.vue";
import axios from "axios";
import FullCalendar from "@fullcalendar/vue";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { format, addDays } from "date-fns";

export default {
  components: { heroSideNav, FullCalendar },
  layout: "admin",
  data() {
    return {
      events: [],
      start_date: "",
      end_date: "",
      start_time: "",
      end_time: "",
      experience: null,
      calendarOptions: {
        plugins: [interactionPlugin, timeGridPlugin],
        initialView: "timeGridWeek",
        nowIndicator: true,
        editable: true,
        eventClick: this.handleDateSelect,
        events: [],
      },
    };
  },
  methods: {
    handleDateSelect(eventClickInfo) {
      console.log(eventClickInfo.event.extendedProps);
    },
    getDates(startDate, endDate) {
      let dates = [];
      //to avoid modifying the original date
      const theDate = new Date(startDate);
      while (theDate < endDate) {
        dates = [...dates, new Date(theDate)];
        theDate.setDate(theDate.getDate() + 1);
      }
      return dates;
    },
    add_events() {
      const dates = this.getDates(
        new Date(this.start_date),
        new Date(this.end_date)
      );
      dates.forEach((date) => {
        let endRecur = format(addDays(new Date(date), 1), "yyyy-MM-dd");
        let startRecur = format(new Date(date), "yyyy-MM-dd");
        let data = {
          startRecur,
          endRecur,
          startTime: this.start_time,
          endTime: this.end_time,
        };
        console.log(data);
        this.calendarOptions.events.push(data);
      });
    },
  },
  async mounted() {
    let uid = this.$route.params.experienceuid;
    try {
      const experience_data = await axios.get(`/api/experience/${uid}`);
      this.experience = experience_data.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style></style>
