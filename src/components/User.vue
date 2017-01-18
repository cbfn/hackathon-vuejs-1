<template>
  <div class="ui center aligned container">
    <div v-show="loading" class="ui card centered">
      <div class="image">
        <gravatar :src="user.email" default="retro" size="290" />
      </div>
      <div class="content left aligned">
        <a class="header">{{ user.name }}</a>
        <div class="meta">
          <span class="date">{{ normalizeEmail }}</span>
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
    this.$Progress.start()
    axios.get(ENDPOINT + '/users?id=' + this.$route.params.id).then((response) => {
      this.$Progress.finish()
      this.loading = true
      this.$set(this, 'user', response.data[0])
    }).catch((error) => {
      console.log(error)
      this.$Progress.fail()
    })
  },
  computed: {
    normalizeEmail () {
      let email = this.user.email
      if (typeof email !== 'undefined') {
        return email.toLowerCase()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
