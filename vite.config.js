import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    brotliSize: false,
    sourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
