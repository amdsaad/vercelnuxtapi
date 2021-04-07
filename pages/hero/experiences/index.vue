<template>
  <div class="admin-page hero ">
    <hero-side-nav />
    <div class="admin-content hero-content">
      <div class="add-experience">
        <h3>Add Experience</h3>
        <input
          class="input-admin"
          type="text"
          v-model="name"
          placeholder="experience name"
        />
        <input
          class="input-admin"
          type="text"
          v-model="uid"
          placeholder="prsmic uid"
        />
        <button class="add-btn" @click="addExperience">Add Experience</button>
      </div>
      <div class="experience-list">
        <table class="admin-table">
          <tr>
            <th>Experience Name</th>
            <th>Edit</th>
          </tr>

          <tr v-for="item in hero_experiences" :key="item.name">
            <td>{{ item.name }}</td>
            <td>
              <nuxt-link :to="'/hero/experiences/' + item.uid">Edit</nuxt-link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import heroSideNav from "~/components/hero-side-nav.vue";
import axios from "axios";
export default {
  components: { heroSideNav },
  layout: "admin",
  data() {
    return {
      uid: "",
      name: "",
      hero: null,
      email: "",
      hero_experiences: [],
    };
  },
  async mounted() {
    let email_ = this.$auth.user.email;
    this.email = email_;
    try {
      const experiences = await axios.get(`/api/experiences/${email_}`, {
        uid: this.uid,
        hero_email: email_,
      });
      this.hero_experiences = experiences.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async addExperience() {
      try {
        const respond = await axios.post("/api/experience/", {
          name: this.name,
          uid: this.uid,
          hero_email: this.email,
        });
        this.hero_experiences.push({ ...respond.data });
        this.name = "";
        this.uid = "";
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
