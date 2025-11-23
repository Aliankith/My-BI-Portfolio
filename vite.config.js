import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensures all paths are relative, which sometimes fixes Vercel deployment issues
  base: './', 
  build: {
    // Ensures the output directory is 'dist' (the default)
    outDir: 'dist',
  },
});
