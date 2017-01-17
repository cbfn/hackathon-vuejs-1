<template>
  <div class="ui middle aligned divided list">
    <div class="item" v-for="user in users">
      <div class="right floated content">
        <router-link class="ui button" :to="{ name: 'user', params: { id: user.id }}">Edit</router-link>
      </div>
      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" class="ui avatar image">
      <div class="content">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const ENDPOINT = 'https://jsonplaceholder.typicode.com'

export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  mounted () {
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
h1, h2 {
  font-weight: normal;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

article {
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
}
</style>
