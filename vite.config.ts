import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import antdViteImportPlugin from 'antd-vite-import-plugin'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    antdViteImportPlugin(),
    WindiCSS(),
  ],
  server: {
    host: true,
    watch: true
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
