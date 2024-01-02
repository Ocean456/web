import {defineConfig, optimizeDeps} from 'vite'
import vue from '@vitejs/plugin-vue'
// import fs from 'fs'
// import { fileURLToPath } from 'url';
// import { dirname, resolve } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [vue()],
/*  server: {
    open: true,
    https: {
      key: fs.readFileSync(resolve(__dirname, 'cert.key')),
      cert: fs.readFileSync(resolve(__dirname, 'cert.crt'))
    }
  }*/
  optimizeDeps: {
    exclude: ['BMap']
  }
})

