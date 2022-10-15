import { BasePage } from './basePage';

export class RegistrationPage extends BasePage {
  constructor() {
    super();
  }

  public fillEmail(email: string) {
    cy.get('[id="Input_Email"]').type(email);
  }

  public fillPassword(password: string) {
    cy.get('[id="Input_Password"]').type(password);
  }

  public fillConfirmPassword(password: string) {
    cy.get('[id="Input_ConfirmPassword"]').type(password);
  }

  public signUp() {
    cy.get('[id="recaptcha"]').click();
  }

  public verifyActivationLetterIsSent() {
    cy.get('body h2').should('have.text', 'Check your inbox to activate your account');
  }

  public verifyConfirmPasswordErrorMessage(errorMessage: string) {
    cy.get('[id="Input_ConfirmPassword-error"]').should('have.text', errorMessage);
  }

  public verifyPasswordErrorMessage(errorMessage: string) {
    cy.get('[id="Input_Password-error"]').should('have.text', errorMessage);
  }

  public verifyEmailErrorMessage(errorMessage: string) {
    cy.get('[id="Input_Email-error"]').should('have.text', errorMessage);
  }
}
