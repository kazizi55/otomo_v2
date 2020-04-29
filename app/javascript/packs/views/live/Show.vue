<template>
  <div>
    <p>ライブ名：{{ live.name }}</p>
    <p>説明：{{ live.explanation }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      live: {}
    }
  },
  mounted(){
    axios
      .get(`/api/lives/${this.$route.params.id}`)
      .then(response => (this.live = response.data))
  }
}
</script>