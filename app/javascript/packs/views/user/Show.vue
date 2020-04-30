<template>
  <div>
    <p>ユーザー名：{{ user.name }}</p>
    <p>メアド：{{ user.email }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      user: {}
    }
  },
  mounted(){
    axios
      .get(`/api/users/${this.$route.params.id}`)
      .then(response => (this.user = response.data))
  }
}
</script>