import { defineConfig } from 'cypress';
import { baseUrl, defaultCommandTimeout } from './cypress/support/constants';
import AllureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  e2e: {
    specPattern: 'ui/cypress/e2e/**/**.cy.ts',
    baseUrl,
    defaultCommandTimeout,
    supportFile: 'ui/cypress/support/index.ts',
    videosFolder: 'ui/cypress/assets/videos',
    screenshotsFolder: 'ui/cypress/assets/screenshots',
    downloadsFolder: 'ui/cypress/assets/downloads',
    env: {
      allure: true,
      allureResultsPath: 'ui/cypress/assets/allure-results',
    },
    setupNodeEvents(on, config) {
      AllureWriter(on, config);
      return config;
    },
  },
});
