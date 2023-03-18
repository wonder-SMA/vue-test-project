<script>
export default {
  name: 'PostForm',

  emits: {
    'create': null
  },

  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    };
  },

  methods: {
    submit() {
      if (this.post.title && this.post.body) {
        this.$emit('create', { ...this.post });
        this.post.title = '';
        this.post.body = '';
      }
    },
  }
};
</script>

<template>
  <form class="form_add-new-post" @submit.prevent="submit">
    <h2>Create a new post</h2>
    <my-input v-focus v-model="post.title" placeholder="title" />
    <my-input v-model="post.body" placeholder="description" />
    <my-button type="submit">Create</my-button>
  </form>
</template>

<style scoped>
.form_add-new-post {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}
</style>
