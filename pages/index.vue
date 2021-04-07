<template>
  <div>
    <h1>hELLO wORLD</h1>
    <nuxt-link to="/auth/signed-in">Login</nuxt-link>
    <div>
      <button @click="logout">logout</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
  async asyncData(context) {
    console.log(context.$auth.user);
  },
};
</script>

<style></style>
