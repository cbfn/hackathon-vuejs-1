<template>
  <img :src="url" alt="avatar" :width="imageSize">
</template>

<script>
import md5 from 'md5'

const ENDPOINT = 'https://www.gravatar.com/avatar/'
export default {
  props: {
    src: { // user's profile email
      type: String
    },
    default: { // default picture
      type: String,
      default: 'mm' // Displays a shape of someone
    },
    size: { // Size of the image
      type: String,
      default: '290' // Default size : 80 (squarre shape)
    }
  },
  data () {
    return {
      endpoint: ENDPOINT
    }
  },
  computed: {
    url () {
      let email = this.src
      if (typeof email !== 'undefined') {
        let emailToLower = email.toLowerCase()
        let hash = md5(emailToLower)
        let size = '?s=' + this.size
        let defPicture = '&d=' + this.default

        if (this.default === 'gravatar') {
          defPicture = ''
        }

        return this.endpoint + hash + size + defPicture
      }
    },
    imageSize () {
      let size = this.size
      return size
    }
  }
}
</script>

<style lang="css">
</style>
