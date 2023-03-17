import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  resolve: {
    alias: {
      components: '/src/components/',
      directives: '/src/directives/',
      hooks: '/src/utils/',
      store: '/src/store/',
    }
  },
  plugins: [vue()],
});
