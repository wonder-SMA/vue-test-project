<script>
export default {
  name: 'MySearch',

  props: {
    delay: {
      type: Number,
      default: 0,
    }
  },

  emits: {
    search: null,
  },

  data() {
    return {
      searchQuery: '',
      timeoutID: null,
    };
  },

  methods: {
    clear() {
      if (typeof this.timeoutID === 'number') {
        clearTimeout(this.timeoutID);
      }
    }
  },

  watch: {
    searchQuery() {
      this.clear();
      this.timeoutID = setTimeout(() => {
        this.$emit('search', this.searchQuery.trim());
      }, this.delay);
    }
  },

  unmounted() {
    this.clear();
  },
};
</script>

<template>
  <my-input
      v-model="searchQuery"
      placeholder="Search..."
      class="search"
  />
</template>

<style scoped>
.search {
  max-width: 400px;
  padding: 0.7em;
}
</style>
