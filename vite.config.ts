import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  server: {
    port: 5173, // Ensure this matches your local dev port
    host: true,
  },
  preview: {
    port: 4173, // This is for `vite preview`
    host: true,
    allowedHosts: ['candidate-search-laxp.onrender.com'], // Add your Render domain
  },
});
