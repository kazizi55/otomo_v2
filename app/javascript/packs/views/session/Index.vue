<template>
  <div>
    <h1>セッション一覧</h1>
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>セッション名</th>
        </tr>
        <tr v-for="session in sessions" :key="session.id">
          <td>{{ session.id }}</td>
          <td>{{ session.name }}</td>
          <td><router-link :to='{ name: "SessionShow", params: { id: session.id } }'>詳細</router-link></td>
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
      sessions: []
    }
  },
  created(){
    axios
      .get('/api/v1/sessions')
      .then(response => (this.sessions = response.data))
  }
}
</script>