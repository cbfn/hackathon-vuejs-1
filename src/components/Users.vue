<template>
  <div class="ui middle aligned divided list">
    <h1>User list</h1>
    <div class="item" v-for="user in users">
      <div class="right floated content">
        <router-link class="ui button" :to="{ name: 'user', params: { id: user.id }}">Edit</router-link>
      </div>
      <gravatar :src="user.email" default="retro" size="290" alt="avatar" class="ui avatar image"/>
      <div class="content">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Gravatar from './util/Gravatar'

const ENDPOINT = 'https://jsonplaceholder.typicode.com'

export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  components: {
    Gravatar
  },
  created () {
    axios.get(ENDPOINT + '/users').then((response) => {
      this.$set(this, 'users', response.data)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: 400;
}
</style>
