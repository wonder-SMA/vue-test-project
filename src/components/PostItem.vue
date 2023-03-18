<script>
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
      <slot />
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
  line-height: 1.25em;
}

.post__buttons {
  display: flex;
  justify-content: end;
  padding-top: 8px;
}
</style>
