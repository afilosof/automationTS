import { getRandomString } from '../support/helper';
import { ContextPage } from '../support/pageObject/contextPage';
import { PageFactory } from '../support/pageObject/pageFactory';
import { RegistrationPage } from '../support/pageObject/registrationPage';
import { PAGES } from '../support/types';

const registrationPage = PageFactory.getPage(PAGES.REGISTRATION) as RegistrationPage;
const contextPage = PageFactory.getPage(PAGES.CONTEXT) as ContextPage;

const randomEmail = getRandomString(7) + '@gmail.com';
const randomPassword = getRandomString(10);
const randomConfirmPassword = getRandomString(10);

describe('Verify REVERSO Context Page', () => {
  beforeEach(() => {
    contextPage.openPage();
    contextPage.allowDataProcessing();
    contextPage.openUserMenu();
    contextPage.selectRegisterItem();
  });

  it('Verification of the page title', () => {
    registrationPage.verifyPageTitle('Reverso | create an account');
  });

  it('Registration with valid data', () => {
    registrationPage.fillEmail(randomEmail);
    registrationPage.fillPassword(randomPassword);
    registrationPage.fillConfirmPassword(randomPassword);
    registrationPage.signUp();
    registrationPage.verifyActivationLetterIsSent();
  });

  it('Registration with invalid email', () => {
    registrationPage.fillEmail(randomConfirmPassword);
    registrationPage.fillPassword(randomPassword);
    registrationPage.fillConfirmPassword(randomPassword);
    registrationPage.signUp();
    registrationPage.verifyEmailErrorMessage('The e-mail address is invalid.');
  });

  it('Registration with not equal passwords', () => {
    registrationPage.fillEmail(randomEmail);
    registrationPage.fillPassword(randomPassword);
    registrationPage.fillConfirmPassword(randomConfirmPassword);
    registrationPage.signUp();
    registrationPage.verifyConfirmPasswordErrorMessage('The passwords do not match!');
  });

  it('Registration with an empty password', () => {
    registrationPage.fillEmail(randomEmail);
    registrationPage.signUp();
    registrationPage.verifyPasswordErrorMessage("Please fill in the 'Password' field.");
  });
});
