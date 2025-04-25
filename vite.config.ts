import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    headers: {
      "content-security-policy": "style-src-elem 'self' 'nonce-N0NCE'; style-src 'self' 'nonce-N0NCE';"
    }
  },
})
