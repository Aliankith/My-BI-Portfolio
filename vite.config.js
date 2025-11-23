import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // ✅ Correct - ensures relative paths for deployment
  build: {      // ✅ Fix: Change 'builds' to 'build'
    outDir: 'dist',
  }
});

