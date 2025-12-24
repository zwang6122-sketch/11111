import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 设置为相对路径，这对 GitHub Pages 至关重要
  // 它可以确保 CSS 和 JS 文件能被正确找到，无论项目部署在哪个子路径下
  base: './', 
  build: {
    outDir: 'dist',
  },
});