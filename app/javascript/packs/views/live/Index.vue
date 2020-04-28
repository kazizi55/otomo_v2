<template>
  <div>
    <h1>ライブ告知一覧</h1>
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>ライブ名</th>
        </tr>
        <tr v-for="live in lives" :key="live.id">
          <td>{{ live.id }}</td>
          <td>{{ live.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      lives: []
    }
  },
  created(){
    axios
      .get('/api/v1/lives')
      .then(response => (this.lives = response.data))
  }
}
</script>