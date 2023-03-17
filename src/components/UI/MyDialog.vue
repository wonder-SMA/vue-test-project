<script>
export default {
  name: 'MyDialog',

  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },

  emits: {
    'update:modelValue': null
  },

  methods: {
    hide() {
      this.$emit('update:modelValue', false);
    }
  },
};
</script>

<template>
  <div class="dialog" v-if="modelValue" @click="hide">
    <div class="dialog__content" @click.stop>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  min-height: 50px;
  min-width: 300px;
  margin: auto;
  padding: 20px;
  border-radius: 12px;
  background: #e9ebeb;
}
</style>
