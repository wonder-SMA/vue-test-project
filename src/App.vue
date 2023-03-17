<template>
  <div class="App">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
html {
  box-sizing: border-box;
}

body {
  background: rgb(233, 235, 235);
}

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

.App {
  min-height: 100vh;
  max-width: 1024px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

h1, h2 {
  font-family: "Trebuchet MS", sans-serif;
  line-height: 1.25em;
}
</style>
