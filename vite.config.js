import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/https://github.com/tiukupuu/todolistreact.git/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
