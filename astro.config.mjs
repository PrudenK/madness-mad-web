// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'
// https://astro.build/config

export default defineConfig({
    site: 'https://prudenk.github.io',
    base: '/madness-mad-web/',
    vite: {
        plugins: [tailwindcss()]
    }
})