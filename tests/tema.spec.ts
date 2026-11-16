import { test, expect, type Page } from '@playwright/test';

// Colores de fondo del body (DESIGN.md): papel en claro, azul noche en oscuro
const PAPEL = 'rgb(246, 241, 231)';
const AZUL_NOCHE = 'rgb(20, 22, 64)';

const fondo = (page: Page) => page.evaluate(() => getComputedStyle(document.body).backgroundColor);
const toggle = (page: Page) => page.locator('[data-theme-toggle]');

test.describe('sigue la preferencia del sistema', () => {
	test.describe('sistema en claro', () => {
		test.use({ colorScheme: 'light' });
		test('arranca en claro', async ({ page }) => {
			await page.goto('/');
			expect(await fondo(page)).toBe(PAPEL);
			await expect(toggle(page)).toHaveAttribute('aria-label', 'Cambiar a modo oscuro');
		});
	});

	test.describe('sistema en oscuro', () => {
		test.use({ colorScheme: 'dark' });
		test('arranca en oscuro', async ({ page }) => {
			await page.goto('/');
			expect(await fondo(page)).toBe(AZUL_NOCHE);
			await expect(toggle(page)).toHaveAttribute('aria-label', 'Cambiar a modo claro');
		});
	});
});

test.describe('botón de tema', () => {
	test.use({ colorScheme: 'light' });

	test('alterna, guarda la elección y la respeta al recargar', async ({ page }) => {
		await page.goto('/');
		await toggle(page).click();
		expect(await fondo(page)).toBe(AZUL_NOCHE);
		expect(await page.evaluate(() => localStorage.getItem('tema'))).toBe('dark');

		await page.reload();
		expect(await fondo(page)).toBe(AZUL_NOCHE);

		await toggle(page).click();
		expect(await fondo(page)).toBe(PAPEL);
		expect(await page.evaluate(() => localStorage.getItem('tema'))).toBe('light');
	});

	test('la elección manda sobre el sistema', async ({ page }) => {
		await page.emulateMedia({ colorScheme: 'dark' });
		await page.goto('/');
		await toggle(page).click(); // a claro
		await page.reload();
		expect(await fondo(page)).toBe(PAPEL);
	});
});

test.describe('sin JavaScript', () => {
	test.use({ javaScriptEnabled: false, colorScheme: 'dark' });
	test('no muestra el botón y sigue al sistema', async ({ page }) => {
		await page.goto('/');
		await expect(toggle(page)).toBeHidden();
		expect(await fondo(page)).toBe(AZUL_NOCHE);
	});
});

test.describe('header', () => {
	test('no se desborda horizontalmente', async ({ page }) => {
		await page.goto('/');
		const desborde = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
		expect(desborde).toBeLessThanOrEqual(0);
	});
});

// Capturas de página completa para revisión visual (se adjuntan al reporte)
for (const scheme of ['light', 'dark'] as const) {
	test.describe(`captura ${scheme === 'light' ? 'clara' : 'oscura'}`, () => {
		test.use({ colorScheme: scheme, reducedMotion: 'reduce' });
		test('página completa y footer', async ({ page }, testInfo) => {
			await page.goto('/');
			await page.evaluate(() => document.fonts.ready);
			await testInfo.attach('pagina', { body: await page.screenshot({ fullPage: true }), contentType: 'image/png' });
			await testInfo.attach('footer', { body: await page.locator('footer').screenshot(), contentType: 'image/png' });
		});
	});
}
