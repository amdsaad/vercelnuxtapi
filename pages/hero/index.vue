<template>
  <div class="admin-page hero ">
    <hero-side-nav />
    <div class="admin-content hero-content">
      Hello There this is a dashboard admi can communicate with Hero
    </div>
  </div>
</template>

<script>
import axios from "axios";
import heroSideNav from "../../components/hero-side-nav.vue";
export default {
  components: { heroSideNav },

  middleware: "auth",
  layout: "admin",

  async asyncData({ redirect, $auth, $axios }) {
    let email_ = $auth.user.email;
    let user;
    try {
      const response = await axios.get(`api/user/${email_}`);
      user = response;
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style></style>
