<template>
  <div>
    <router-link to="/" class="title">Otomo</router-link>
    <br>
    <router-link to="/band">バンドメンバー募集</router-link>
    <router-link to="/session">セッションメンバー募集</router-link>
    <router-link to="/live">ライブ告知</router-link>
    <router-link to="/signin">Sign In</router-link>
    <router-link to="/signup">Sign Up</router-link>
  </div>
</template>

<style scoped>
  .title {
    font-size: 30px;
    text-decoration: none;
    color:black;
  }
</style>