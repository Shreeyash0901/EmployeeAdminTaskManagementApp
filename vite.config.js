import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Adjust if deploying to a subdirectory
  server: {
    port: 3000, // Customize the dev server port
    open: true, // Opens the browser when the server starts
  },
  build: {
    sourcemap: true, // Generate sourcemaps for easier debugging
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // Environment-specific variables
  },
  resolve: {
    alias: {
      // This can help with importing modules easily
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: [
      // List any modules that you want to pre-bundle
    ],
    exclude: [
      // List any modules that cause issues with bundling
      // For example, 'path', 'source-map-js', 'url'
    ],
  },
});
  