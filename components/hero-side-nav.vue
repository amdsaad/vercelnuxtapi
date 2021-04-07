<template>
  <div class="admin-side-nav hero-side-nav ">
    <nuxt-link :to="nav.to" v-for="nav in hero_nav" :key="nav.name">
      {{ nav.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero_nav: [
        {
          name: "experiences",
          to: "/hero/experiences",
        },
        {
          name: "bookings",
          to: "/hero/bookings",
        },
      ],
    };
  },
};
</script>

<style></style>
