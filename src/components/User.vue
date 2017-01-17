<template>
  <div class="ui card centered">
    <div class="image">
      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50">
    </div>
    <div class="content">
      <a class="header">{{ user.name }}</a>
      <div class="meta">
        <span class="date">{{ user.email }}</span>
      </div>
      <div class="description">
        <strong>Website:</strong> {{ user.website }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const ENDPOINT = 'https://jsonplaceholder.typicode.com'

export default {
  name: 'user',
  data () {
    return {
      user: []
    }
  },
  mounted () {
    axios.get(ENDPOINT + '/users?id=' + this.$route.params.id).then((response) => {
      this.$set(this, 'user', response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
