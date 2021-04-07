<template>
  <div class="admin-page">
    <admin-side-nav />
    <div class="admin-content users">
      <div class="admin-find-user">
        <div class="input-group ">
          <label for="search">search user</label>
          <input
            type="text"
            placeholder="search user by email"
            name="search"
            v-model="email"
          />
          <div class="search" @click="findUser">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512.005 512.005"
              style="enable-background:new 0 0 512.005 512.005;"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
        </div>
      </div>
      <div class="admin-user-info">
        <div class="load" v-if="load"></div>
        <div class="feedback" v-if="showFeedback">{{ feedbackText }}</div>
        <user-info :userData="userData" v-if="userData" />
      </div>
    </div>
  </div>
</template>

<script>
import adminSideNav from "~/components/admin-side-nav";
import userInfo from "~/components/user-information";
import axios from 'axios'
export default {
  components: { adminSideNav, userInfo },
  layout: "admin",
  data() {
    return {
      email: "saadamd@gmail.com",
      userData: null,
      load: false,
      feedbackText: "",
      showFeedback: false,
    };
  },
  methods: {
    async findUser() {
      this.load = true;
      const user = await axios.get(`/api/user/${this.email}`);
      if (user) {
        this.load = false;
        this.userData = user.data;
        console.log(this.userData)
      } else {
        this.feedbackText = `can't find user with this email addess ${this.email}`;
        this.showFeedback = true;
        setTimeout(() => {
          this.showFeedback = false;
        }, 3000);
      }
    },
  },
};
</script>

<style></style>
