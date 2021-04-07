<template>
  <div class="admin-page">
    <admin-side-nav />
    <div class="admin-content">
      admin experiences
    </div>
  </div>
</template>

<script>
import adminSideNav from "~/components/admin-side-nav.vue";
export default {
  components: { adminSideNav },
  layout: "admin",
};
</script>

<style></style>
