<template>
  <div class="ui center aligned container">
    <i v-if="loading" class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
    <div v-else="loading"  class="ui card centered">
      <div class="image">
        <gravatar :src="user.email" default="retro" size="290" />
      </div>
      <div class="content left aligned">
        <a class="header">{{ user.name }}</a>
        <div class="meta">
          <span class="date">{{ user.email }}</span>
        </div>
        <div class="description">
          <strong>Website:</strong> {{ user.website }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Gravatar from './util/Gravatar'

const ENDPOINT = 'https://jsonplaceholder.typicode.com'

export default {
  name: 'user',
  data () {
    return {
      user: [],
      loading: false
    }
  },
  components: {
    Gravatar
  },
  mounted () {
    this.loading = true
    axios.get(ENDPOINT + '/users?id=' + this.$route.params.id).then((response) => {
      this.loading = false
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
