<script>
export default {
  name: 'PostList',

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
    delete(id) {
      this.$emit('delete', id);
    }
  }
};
</script>

<template>
  <section v-if="posts.length" class="posts">
    <h2>Post list</h2>
    <post-item
        class="post"
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @delete="this.delete"
    />
  </section>
  <h2 v-else class="empty-list">Post list is empty!</h2>
</template>

<style scoped>
.posts {
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  padding: 12px;
  border: 2px solid darksalmon;
}

.empty-list {
  margin: 12px;
  text-align: center;
  color: red;
}
</style>
