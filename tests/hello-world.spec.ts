import { test, expect } from '@playwright/test';

test('Testa a página de Hello World do Vaadin', async ({ page }) => {
  // Acessa a página principal do projeto Vaadin
  await page.goto('http://localhost:8080');

  await expect(page).toHaveTitle('###Project Name###'); // Ajuste conforme o título atual

  // Verifica se o campo de texto para "Your name" está presente na página
  const textField = await page.locator('text="Your name"');
  await expect(textField).toBeVisible();

  // Verifica se o botão "Say hello" está presente e é clicável
  const button = await page.locator('text="Say hello"');
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();

  // Insere um nome no campo de texto
  await textField.fill('John');

  // Clica no botão "Say hello"
  await button.click();

  // Verifica se a saudação correta é exibida
  const greetingText = await page.locator('text="Hello John"');
  await expect(greetingText).toBeVisible();

  // Testa com o campo vazio
  await textField.fill('');
  await button.click();

  // Verifica se a saudação para usuário anônimo é exibida
  const anonymousGreeting = await page.locator('text="Hello anonymous user"');
  await expect(anonymousGreeting).toBeVisible();
});
