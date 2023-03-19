<script>
import { nextTick } from 'vue';
import { getObserver } from '../utils/getObserver.js';
import { getData, createData } from './../api';

export default {
  name: 'PostsWithOptionsAPI',

  data() {
    return {
      isOpen: false,
      isFetched: false,
      posts: [],
      currentPage: 1,
      totalPages: 0,
      limit: 10,
      sortOptions: [
        { value: 'id', name: 'Sort by' },
        { value: 'title', name: 'title' },
        { value: 'body', name: 'description' }
      ],
      selectedSort: 'id',
      searchQuery: '',
      delay: 500,
      isFeed: false,
    };
  },

  methods: {
    async getPosts(page) {
      try {
        this.isFetched = false;
        const { data: posts, count: totalPages } = await getData(page, this.limit);
        this.posts = this.isFeed ? this.posts.concat(posts) : posts;
        this.totalPages = totalPages;
      } catch (e) {
        console.error(`Error: ${e.message}`);
      } finally {
        this.isFetched = true;

        if (this.isFeed) {
          this.currentPage = page;
        }
      }
    },

    async createPost(post) {
      this.isOpen = false;
      post.userId = Date.now();
      try {
        const data = await createData(post);
        this.posts.push(data);
      } catch (e) {
        console.error(`Error: ${e.message}`);
      }
    },

    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    },

    setCurrentPage(event) {
      const page = +event.target.innerText;
      if (this.currentPage !== page) {
        this.currentPage = page;
        this.getPosts(page);
      }
      window.scrollTo(0, 0);
    },

    setSearchQuery(searchQuery) {
      this.searchQuery = searchQuery;
    },

    setIsFeed(isFeed) {
      this.isFeed = isFeed;
    },
  },

  computed: {
    foundPosts() {
      return this.posts.filter(post => {
        return post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            || post.body.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },

  watch: {
    selectedSort() {
      this.posts.sort((post1, post2) => {
        if (typeof post1[this.selectedSort] === 'number') {
          return post1[this.selectedSort] - post2[this.selectedSort];
        }
        return post1[this.selectedSort].localeCompare(post2[this.selectedSort]);
      });
    },

    isFeed() {
      if (this.isFeed && this.currentPage < this.totalPages) {
        this.observer = getObserver(this.getPosts, this.currentPage + 1);
        this.observer.observe(this.lastPost);
      } else {
        this.observer.disconnect();
      }
    },

    posts() {
      nextTick().then(() => {
        if (this.currentPage < this.totalPages) {
          const listElements = this.$refs.postRefs.$el.children;
          this.lastPost = listElements[listElements.length - 1];

          if (this.isFeed) {
            this.observer = getObserver(this.getPosts, this.currentPage + 1);
            this.observer.observe(this.lastPost);
          }
        }
      });
    },
  },

  created() {
    this.getPosts(this.currentPage);
  },

  unmounted() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
};
</script>

<template>
  <div class="menu">
    <my-button class="create-post" @click="isOpen = true">Create post</my-button>
    <my-search :delay="delay" @search="setSearchQuery" />
    <my-switcher :isChecked="isFeed" @change="setIsFeed" />
    <my-select
        v-model="selectedSort"
        :options="sortOptions"
    />
  </div>
  <my-dialog v-model="isOpen">
    <post-form @create="createPost" />
  </my-dialog>
  <post-list
      ref="postRefs"
      v-show="!isFetched ? isFeed : true"
      :posts="foundPosts"
      @delete="deletePost"
  />
  <div v-show="!isFetched" class="upload-indicator">
    <my-spinner />
  </div>
  <div class="pagination">
    <div
        v-show="isFetched && !isFeed && foundPosts.length"
        v-for="page in totalPages"
        :key="page"
        class="page"
        :class="page === currentPage && 'current-page'"
        @click="setCurrentPage"
    >
      {{ page }}
    </div>
  </div>
</template>

<style>
.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 8px;
  gap: 8px;
}

.create-post {
  align-self: center;
}

.pagination {
  display: flex;
  justify-content: center;
  margin: 4px;
  font-size: 26px;
}

.page {
  padding: 4px;
  font-family: Segoe UI, Arial, sans-serif;
  cursor: pointer;
}

.current-page {
  text-decoration: underline blue;
  text-underline-offset: 3px;
}

.upload-indicator {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
