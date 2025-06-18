import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        waitlist: './waitlist.html',
        thankyou: './thank-you.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})