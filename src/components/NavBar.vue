<script>
export default {
  name: 'NavBar',
};
</script>

<template>
  <div class="navbar">
    <h2 class="title" @click="$router.push('/')">Vue 3</h2>
    <div class="navbar__buttons">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')">About</my-button>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 15px;
  margin-bottom: 8px;
  border: transparent;
  border-radius: 6px;
  font-family: "Trebuchet MS", sans-serif;
  background-color: lightcoral;
  box-shadow: 2px 2px 4px gray;
}

.title {
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.navbar__buttons {
  margin-left: auto;
}
</style>
