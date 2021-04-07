<template>
  <div class="admin-page hero ">
    <hero-side-nav />
    <div class="admin-content hero-content"></div>
  </div>
</template>

<script>
import heroSideNav from "../../../components/hero-side-nav.vue";
export default {
  components: { heroSideNav },
  layout: "admin",
};
</script>

<style></style>
