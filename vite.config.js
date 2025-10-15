import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path';

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        }
    },
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'index.html'),
        }
    },
    plugins: [
        tailwindcss(),
    ],
});
