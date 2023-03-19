<script>
import { router } from '../router/router.js';
import PostItem from './PostItem.vue';

export default {
  name: 'PostList',
  components: { PostItem },

  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  emits: {
    'delete': null
  },

  methods: {
    open(id) {
      router.push(`/posts/${id}`);
    },

    delete(id) {
      this.$emit('delete', id);
    }
  },
};
</script>

<template>
  <section v-if="posts.length" class="posts">
    <h1>Post list</h1>
    <post-item
        class="post"
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @delete="this.delete"
    >
      <my-button @click="open(post.id)">Open</my-button>
      <my-button @click="this.delete(post.id)">Delete</my-button>
    </post-item>
  </section>
  <h1 v-else class="empty-list">Post list is empty!</h1>
</template>

<style scoped>
.posts {
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
}

.empty-list {
  margin: 12px;
  text-align: center;
  color: red;
}
</style>
