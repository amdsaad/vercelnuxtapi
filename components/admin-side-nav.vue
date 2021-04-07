<template>
  <div class="admin-side-nav">
    <nuxt-link :to="nav.to" v-for="nav in admin_nav" :key="nav.name">
      {{ nav.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      admin_nav: [
        {
          name: "users",
          to: "/admin/users",
        },
        {
          name: "experiences",
          to: "/admin/experiences",
        },
        {
          name: "bookings",
          to: "/admin/bookings",
        },
      ],
    };
  },
};
</script>

<style></style>
