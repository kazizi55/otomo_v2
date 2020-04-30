<template>
  <div>
    <router-link to="/" class="title">Otomo</router-link>
    <br>
    <router-link to="/band">バンドメンバー募集</router-link>
    <router-link to="/jam_session">セッションメンバー募集</router-link>
    <router-link to="/live">ライブ告知</router-link>
    <router-link to="/signin" v-if="!signedIn">Sign In</router-link>
    <router-link to="/signup" v-if="!signedIn">Sign Up</router-link>
    <p v-if="signedIn">{{this.$store.state.userData.name}}さん</p>
    <button v-if="signedIn" @click="signOut">Sign out</button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Header',
    computed: mapState([
      'signedIn'
    ]),
    mounted: function() {
      this.$store.dispatch('doFetchSignedIn')
    },
    methods: {
      setError(error, text) {
        this.error = (error.response && error.response.data && error.response.data.error) || text
      },
      signOut() {
        this.$http.secured.delete(`/api/signin`)
          .then(response => {
            delete localStorage.csrf
            delete localStorage.signedIn
            delete sessionStorage.otomo
          })
          .catch(error => this.setError(error, 'Cannot sign out'))
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 30px;
    text-decoration: none;
    color:black;
  }
</style>