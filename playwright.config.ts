import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests', // O diretório onde seus testes estão localizados
  use: {
    headless: true, // Executa os testes em modo headless
    // outras opções específicas do Playwright
  },
};

export default config;
