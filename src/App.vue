<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="ui main text container">
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
body {
  background-color: #FFFFFF;
}
.ui.menu .item img.logo {
  margin-right: 1.5em;
}
.main.container {
  margin-top: 7em;
}
.wireframe {
  margin-top: 2em;
}
.ui.footer.segment {
  margin: 5em 0em 0em;
  padding: 5em 0em;
}
</style>
