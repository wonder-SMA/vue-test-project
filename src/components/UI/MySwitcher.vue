<script>
export default {
  name: 'MySwitcher',

  props: {
    isChecked: Boolean,
  },

  emits: {
    'change': null
  },

  methods: {
    change(e) {
      this.$emit('change', e.target.checked);
    }
  },
};
</script>

<template>
  <label class="switcher">
    <input
        class="switcher__input"
        type="checkbox"
        :checked="isChecked"
        @change="change"
    />
    <span class="switcher__slider" />
  </label>
</template>

<style scoped>
.switcher {
  --height: 28px;
  position: relative;
  display: inline-block;
  width: calc(var(--height) * 2);
  height: var(--height);
  margin-right: 38px;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.switcher::before {
  position: absolute;
  top: calc((var(--height) - 20px) / 2);
  left: calc(var(--height) * 2 + 4px);
  width: 34px;
  height: 20px;
  content: "feed";
  font-family: "Trebuchet MS", sans-serif;
  text-align: center;
}

.switcher__input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switcher__input:not(:checked) + .switcher__slider {
  background-color: grey;
  transition: all 0.3s;
}

.switcher__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(8, 94, 221);
  transition: all 0.3s;
}

.switcher__slider:before {
  position: absolute;
  content: "";
  height: calc(var(--height) - 6px);
  width: calc(var(--height) - 6px);
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: all 0.3s;
}

.switcher__input:checked + .switcher__slider:before {
  transform: translateX(var(--height));
}

.switcher__slider, .switcher__slider:before {
  border-radius: var(--height);
}
</style>
