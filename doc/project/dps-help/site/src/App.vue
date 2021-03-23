<template>
  <div id="app">
    <div class="header">
      <h1>JACE Data Processing Service</h1>
    <hr>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2283e4;
}
.header {
  padding: 5px;
  text-align: left;
  background: #ffffff;
  color: rgb(3, 3, 3);
  font-size: 15px;
}
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>