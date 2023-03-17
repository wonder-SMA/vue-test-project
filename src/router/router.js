import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import Main from '../pages/Main.vue';
import Post from '../pages/Post.vue';
import PostsWithOptionsAPI from '../pages/PostsWithOptionsAPI.vue';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostsWithOptionsAPI
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: Post
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory()
});
