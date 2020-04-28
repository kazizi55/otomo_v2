<template>
  <div>
    <p>セッション名：{{ session.name }}</p>
    <p>説明：{{ session.explanation }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      session: {}
    }
  },
  mounted(){
    axios
      .get(`/api/v1/sessions/${this.$route.params.id}`)
      .then(response => (this.session = response.data))
  }
}
</script>