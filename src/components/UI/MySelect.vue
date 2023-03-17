<script>
export default {
  name: 'MySelect',

  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => {}
    }
  },

  emits: {
    'update:modelValue': null
  },

  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  },
};
</script>

<template>
  <select
      class="sort"
      name="sort"
      id="sort-select"
      :value="modelValue"
      @change="changeOption"
  >
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped>
.sort {
  display: flex;
  align-self: center;
  padding: 0.7em;
  font-size: 16px;
  line-height: 1.25em;
  font-family: "Trebuchet MS", sans-serif;
  border-radius: 8px;
}
</style>
