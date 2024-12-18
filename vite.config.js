import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages config
export default defineConfig({
  plugins: [react()],
  base: '/Atta_Ur_Rehman-Portfolio/',  // Repository name
  server: {
    port: 3000,  // Optional: Change if needed
  }
});
