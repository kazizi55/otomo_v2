<template>
  <div>
    <p>セッション名：{{ jamSession.name }}</p>
    <p>説明：{{ jamSession.explanation }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      jamSession: {}
    }
  },
  mounted(){
    axios
      .get(`/api/jam_sessions/${this.$route.params.id}`)
      .then(response => (this.jamSession = response.data))
  }
}
</script>