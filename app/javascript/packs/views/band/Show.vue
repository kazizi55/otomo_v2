<template>
  <div>
    <p>バンド名：{{ band.name }}</p>
    <p>説明：{{ band.explanation }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      band: {}
    }
  },
  mounted(){
    axios
      .get(`/api/bands/${this.$route.params.id}`)
      .then(response => (this.band = response.data))
  }
}
</script>