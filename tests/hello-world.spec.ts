import { test, expect } from '@playwright/test';

test('Testa a página de Hello World do Vaadin', async ({ page }) => {
  // Substitua pelo URL onde seu projeto Vaadin está rodando (por exemplo, localhost:8080 ou o deploy na nuvem)
  await page.goto('http://localhost:8080');

  // Verifica se o título da página é o esperado
  await expect(page).toHaveTitle('Hello World');

  // Verifica se o texto "Hello World" está presente na página
  const helloText = await page.locator('h1');
  await expect(helloText).toHaveText('Hello World');
});
