import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  base: '/Atta_Ur_Rehman-Portfolio/',

  server: {
    port: 3000,
  }
});
