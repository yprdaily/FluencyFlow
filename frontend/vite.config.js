import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 4567,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8765',
                changeOrigin: true
            }
        }
    },
    build: {
        outDir: 'dist'
    }
});
