import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        perfectlyAverage: fileURLToPath(
          new URL('./projects/perfectly-average/index.html', import.meta.url),
        ),
        privacyPolicy: fileURLToPath(
          new URL('./projects/perfectly-average/privacy-policy/index.html', import.meta.url),
        ),
        layovio: fileURLToPath(new URL('./projects/layovio/index.html', import.meta.url)),
        daytandem: fileURLToPath(new URL('./projects/daytandem/index.html', import.meta.url)),
        literaryTranslator: fileURLToPath(
          new URL('./projects/local-llm-literary-translator/index.html', import.meta.url),
        ),
      },
    },
  },
});
