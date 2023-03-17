<script>
import { router } from '../router/router.js';

export default {
  name: 'PostItem',

  props: {
    post: {
      id: Number,
      userId: Number,
      title: String,
      body: String,
      required: true
    }
  },

  emits: {
    delete: null
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
  <div class="post">
    <div class="post__content">
      <div><b>User: </b>{{ post.userId }}</div>
      <div><b>Title: </b>{{ post.title }}</div>
      <div><b>Description: </b>{{ post.body }}</div>
    </div>
    <div class="post__buttons">
      <my-button @click="open(post.id)">Open</my-button>
      <my-button @click="this.delete(post.id)">Delete</my-button>
    </div>
  </div>
</template>

<style scoped>
.post {
  margin: 12px;
  padding: 12px;
  border: 4px solid lightseagreen;
  font-size: 20px;
}

.post__content {
  margin-right: 20px;
}

.post__buttons {
  display: flex;
  justify-content: end;
  padding-top: 8px;
}
</style>
