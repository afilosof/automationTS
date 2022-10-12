import { defineConfig } from 'cypress';
import { baseUrl, defaultCommandTimeout } from './cypress/support/constants';

export default defineConfig({
  e2e: {
    specPattern: 'ui/cypress/e2e/**/**.cy.ts',
    baseUrl,
    defaultCommandTimeout,
    supportFile: 'ui/cypress/support/index.ts',
    videosFolder: 'ui/cypress/assets/videos',
    screenshotsFolder: 'ui/cypress/assets/screenshots',
    downloadsFolder: 'ui/cypress/assets/downloads',
  },
});
