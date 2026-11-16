// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://sumatealmundo.tur.ar',
	integrations: [sitemap()],
	// El CSS es chico: va inline en el HTML para no bloquear el primer render con otra petición
	build: {
		inlineStylesheets: 'always',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
