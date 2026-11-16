import { defineConfig, devices } from '@playwright/test';

const PORT = 4510;

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	reporter: [['list'], ['html', { open: 'never' }]],
	use: {
		baseURL: `http://localhost:${PORT}`,
		// Usa el Chrome instalado: no hace falta descargar navegadores
		channel: 'chrome',
	},
	projects: [
		{ name: 'escritorio', use: { ...devices['Desktop Chrome'], channel: 'chrome', viewport: { width: 1440, height: 900 } } },
		{ name: 'celular', use: { ...devices['Pixel 7'], channel: 'chrome', viewport: { width: 390, height: 844 } } },
	],
	// Prueba el build de producción, no el dev server
	webServer: {
		command: `pnpm build && pnpm preview --port ${PORT}`,
		url: `http://localhost:${PORT}`,
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
});
