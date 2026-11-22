import { expect, test } from '@playwright/test';

test('el temario, el buscador y el marcador apuntan al mismo catálogo', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Matemática General' })).toBeVisible();
  await page.getByRole('button', { name: 'Unidad 2. Funciones algebraicas' }).click();
  await page.getByRole('link', { name: '2.15. Fracciones parciales' }).click();
  const title = page.getByRole('heading', { level: 1, name: 'Fracciones parciales' });
  await expect(title).toBeFocused();
  await page.getByRole('button', { name: 'Abrir centro de herramientas' }).click();
  await page.getByRole('button', { name: '¿Dónde estoy?' }).click();
  await expect(page.locator('#where-text')).toContainText('Tema 2.15');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Abrir centro de herramientas' })).toBeFocused();
  await page.getByRole('link', { name: 'Teoría', exact: true }).click();
  await page.locator('#fracciones-parciales--teoria + button').click();
  await page.keyboard.press('Escape');
  await page.goto('/');
  await page.getByRole('button', { name: 'Continuar donde quedé' }).click();
  await expect(page.locator('#fracciones-parciales--teoria')).toBeFocused();
  await page.goto('/');
  await page.getByRole('searchbox', { name: 'Tema, apartado o ejemplo' }).fill('circulo unitario');
  await page.getByRole('button', { name: 'Buscar tema' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Círculo unitario' })).toBeFocused();
});

test('el menú móvil se opera con teclado y se puede cerrar', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('/#angulos--tema');
  const toggle = page.getByRole('button', { name: 'Mostrar temario' });
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog', { name: 'Temario del curso' })).toBeVisible();
  await expect(page.getByRole('link', { name: /4\.1\. Ángulos/ })).toHaveAttribute('aria-current', 'page');
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(360);
});
