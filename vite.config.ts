import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
// import reactRefresh from '@vitejs/plugin-react-refresh'
// import antdViteImportPlugin from 'antd-vite-import-plugin'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
  ],
  server: {
    host: true,
    watch:true
  },
  resolve:{
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
