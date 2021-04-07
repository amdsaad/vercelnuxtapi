<template>
  <div>
    <admin-nav />
    <nuxt />
  </div>
</template>

<script>
import adminNav from "~/components/admin-nav.vue";
export default {
  components: { adminNav },
};
</script>
