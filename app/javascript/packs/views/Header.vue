<template>
  <div>
    <div :class="headerMargin">
      <v-app-bar
          :color="color"
          dark
          fixed
          :dense="isXs()"
        >
          <v-btn to="/" :class="title" text>Otomo</v-btn>
          <div class="flex-grow-1"></div>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn to="/band" :class="sideLink" text>バンドメンバー募集</v-btn>
            <v-btn to="/jam_session" :class="sideLink" text>セッションメンバー募集</v-btn>
            <v-btn to="/live" :class="sideLink" text>ライブ告知</v-btn>
            <v-btn to="/signin" v-if="!signedIn" :class="sideLink" text>ログイン</v-btn>
            <v-btn to="/signup" v-if="!signedIn" :class="sideLink" text>ユーザー登録</v-btn>
            <v-btn v-if="signedIn" :to='{ name: "UserShow", params: { id: this.$store.state.userData.id } }' text>{{this.$store.state.userData.name}}さん</v-btn>
            <v-btn v-if="signedIn" @click="signOut" text>Sign out</v-btn>
          </v-toolbar-items>
        </v-app-bar>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Header',
    data(){
      return {
        color: "rgba(255, 167, 38, 0.7)",
      }
    },
    computed: {
      ...mapState(['signedIn']),
      title(){
      return { 'body-1': this.isXs(), 'title': this.isSm(), 'headline': this.isMd(), 'display-1': this.isLg() || this.isXl(), 'font-weight-light': true }
      },
      sideLink(){
        return { 'caption': this.isXs(), 'body-2': this.isSm(), 'body-1': this.isMd(), 'title': this.isLg() || this.isXl(), 'font-weight-black': true }
      }
    },
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
            this.$router.go({path: this.$router.currentRoute.path, force: true})
          })
          .catch(error => this.setError(error, 'Cannot sign out'))
      }
    }
  }
</script>

<style scoped>
  .margin-top-60 {
    margin-top: 60px;
  }

  .margin-top-100 {
    margin-top: 100px;
  }

  .margin-top-150 {
    margin-top: 150px;
  }
</style>