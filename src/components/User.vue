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
        {{ user.company.bs }} at {{ user.company.name }}
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="user icon"></i>
        22 Friends
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Gravatar from './util/Gravatar'
const ENDPOINT = 'https://jsonplaceholder.typicode.com'

export default {
  name: 'user',
  components: {
    Gravatar
  },
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
