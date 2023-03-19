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
  <div class="post__content">
    <p><span>User: </span>{{ post.userId }}</p>
    <p><span>Title: </span>{{ post.title }}</p>
    <p><span>Description: </span>{{ post.body }}</p>
    <div class="post__buttons">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.post__content {
  width: 100%;
  margin: 12px;
  padding: 8px;
  font-family: Segoe UI, Arial, sans-serif;
  font-size: 20px;
  line-height: 1.25em;
  text-align: justify;
  border-radius: 8px;
  box-shadow: 0 0 12px 2px rgb(0 0 0 / 25%);
}

.post__content > p > span {
  font-family: "Trebuchet MS", sans-serif;
  font-weight: bold;
  color: rgb(232, 62, 140);
}

.post__buttons {
  display: flex;
  justify-content: end;
  padding-top: 8px;
}
</style>
