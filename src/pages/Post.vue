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
  <h1>Post page with ID: {{ $route.params.id }}</h1>
  <section>
    <post-item
        v-if="isFetched"
        class="post"
        :post="post"
    >
      <my-button @click="goBack()">Back</my-button>
    </post-item>
    <div v-else class="upload-indicator">
      <my-spinner />
    </div>
  </section>
</template>
