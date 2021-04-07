<template>
  <div class="admin-user-info-area">
    <div class="input-group ">
      <label for="family_name">Family Name</label>
      <input
        type="text"
        placeholder=""
        name="family_name"
        v-model="userData.family_name"
      />
    </div>
    <div class="input-group ">
      <label for="given_name">Given Name</label>
      <input
        type="text"
        placeholder=""
        name="given_name"
        v-model="userData.given_name"
      />
    </div>
    <div class="input-group ">
      <label for="email">Email</label>
      <input
        type="email"
        placeholder=""
        name="email"
        v-model="userData.email"
      />
    </div>
    <div class="input-group ">
      <label for="nickname">Nick Name</label>
      <input
        type="text"
        placeholder=""
        name="nickname"
        v-model="userData.nickname"
      />
    </div>
    <div class="input-group checkbox">
      <label for="isAdmin">Is Admin</label>
      <input
        type="checkbox"
        placeholder=""
        name="nickname"
        v-model="userData.isAdmin"
      />
    </div>
    <div class="input-group checkbox">
      <label for="isAdmin">Is Hero</label>
      <input
        type="checkbox"
        placeholder=""
        name="nickname"
        v-model="userData.isHero"
      />
    </div>
    <div class="about">
      <p>About</p>
      <textarea name="about" v-model="userData.about"></textarea>
    </div>
    <div class="save">
      <button @click="updateUser">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userData"],
  methods: {
    async updateUser() {
      await this.$axios.$put(`/api/user/${this.userData.email}`, {
        family_name: this.userData.family_name,
        given_name: this.userData.given_name,
        email: this.userData.email,
        nickname: this.userData.nickname,
        picture: this.userData.picture,
        isAdmin: this.userData.isAdmin,
        isHero: this.userData.isHero,
        about: this.userData.about,
      });
    },
  },
};
</script>

<style></style>
