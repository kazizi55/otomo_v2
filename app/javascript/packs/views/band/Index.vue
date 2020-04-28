<template>
  <div>
    <h1>バンドメンバー募集一覧</h1>
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>バンド名</th>
        </tr>
        <tr v-for="band in bands" :key="band.id">
          <td>{{ band.id }}</td>
          <td>{{ band.name }}</td>
          <td><router-link :to='{ name: "BandShow", params: { id: band.id } }'>詳細</router-link></td>
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
      bands: []
    }
  },
  created(){
    axios
      .get('/api/v1/bands')
      .then(response => (this.bands = response.data))
  }
}
</script>