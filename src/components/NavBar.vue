<template>
  <div class="ui fixed inverted menu">
    <div class="ui container">
      <router-link to="/" class="header item logo">Postfy</router-link>
      <router-link to="/users" class="item">Users</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  font-weight: 700;
  font-size: 1.25em;
  color: cyan !important;
}
</style>
