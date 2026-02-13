import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Experiment-3.2/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
