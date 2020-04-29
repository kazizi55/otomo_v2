<template>
  <div>
    <h1>セッションメンバー募集一覧</h1>
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>セッション</th>
        </tr>
        <tr v-for="jam in jamSessions" :key="jam.id">
          <td>{{ jam.id }}</td>
          <td>{{ jam.name }}</td>
          <td><router-link :to='{ name: "JamSessionShow", params: { id: jam.id } }'>詳細</router-link></td>
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
      jamSessions: []
    }
  },
  created(){
    axios
      .get('/api/jam_sessions')
      .then(response => (this.jamSessions = response.data))
  }
}
</script>