import { BasePage } from './basePage';
import { LANGUAGES } from '../types';

export class ContextPage extends BasePage {
  constructor() {
    super();
    this.url = '';
  }

  public allowDataProcessing() {
    cy.get('body').then(($body) => {
      if ($body.find('[id="didomi-notice-agree-button"]').length) {
        cy.get('[id="didomi-notice-agree-button"]').then(($button) => {
          if ($button.is(':visible')) {
            cy.wrap($button).click();
          }
        });
      }
    });
  }

  public switchLanguage(language: LANGUAGES) {
    cy.get('[id="translate-links"]').find(`[title="${language}"]`).click();
  }

  public verifyLanguageIsSelected(language: LANGUAGES) {
    cy.get('[id="trg-selector"]')
      .find('[class="option front"]')
      .invoke('prop', 'innerText')
      .then(($value) => {
        expect($value).to.eq(language);
      });
  }

  public fillContext(context: string) {
    cy.get('[id="search-input"]').type(context);
  }

  public searchContext() {
    cy.get('[id="search-button"]').click();
  }

  public verifyContextIsFound(context: string, language: LANGUAGES) {
    cy.get('[id="search-options"]')
      .invoke('prop', 'innerText')
      .then(($value) => {
        expect($value).to.eq(`Translation of \"${context}\" in ${language}`);
      });
  }

  public openUserMenu() {
    cy.get('[id="reverso-user-menu"]').click();
  }

  public selectRegisterItem() {
    cy.get('[class="drop-down"]').contains('Register').click();
  }
}
