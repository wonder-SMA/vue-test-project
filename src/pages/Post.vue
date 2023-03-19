<script>
import { router } from '../router/router.js';

export default {
  name: 'Post',

  data() {
    return {
      isFetched: false,
      post: {},
    };
  },

  methods: {
    async fetchPost(id) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
        this.post = await response.json();
      } catch (e) {
        console.error(`Error: ${e.message}`);
      } finally {
        this.isFetched = true;
      }
    },

    goBack() {
      router.go(-1);
    },
  },

  created() {
    this.fetchPost(this.$route.params.id);
  },
};
</script>

<template>
  <section v-if="isFetched" class="post">
    <h1>Post page with ID: {{ $route.params.id }}</h1>
    <post-item :post="post">
      <my-button @click="goBack()">Back</my-button>
    </post-item>
  </section>
  <div v-else class="upload-indicator">
    <my-spinner />
  </div>
</template>

<style scoped>
.post {
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
}

.upload-indicator {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
