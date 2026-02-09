import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // or your framework

export default defineConfig({
  base: '/valentines-site/',  // <--- add this line
  plugins: [vue()],
});
