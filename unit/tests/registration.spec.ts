import { registrationForm } from '../src/registration';
import { expect } from 'chai';

const validEmailMail = 'anya.filosof@mail.ru';
const validPassword = '@12345tg6789';
const successfulMessage = 'Registration is successful';

const negativeCasesMap: Map<string, { email: string; password: string; confirmPassword: string; errorMessage: string }> = new Map([
  ['Email and password are empty', { email: '', password: '', confirmPassword: '', errorMessage: 'Email is empty' }],
  ['Email does not contain @', { email: 'annafilosofgmail.com', password: '', confirmPassword: '', errorMessage: 'Email is not valid' }],
  ['Password is shorter than 10 characters', { email: validEmailMail, password: '123456789', confirmPassword: '12345678910', errorMessage: 'Password should be longer than 10 characters' }],
  ['Password contains Cyrillic characters', { email: validEmailMail, password: '12345ж678902ф', confirmPassword: '12345678913', errorMessage: 'Password might contain only numbers, Latin alphabet characters, and special symbols' }],
  ['Password does not contain a number', { email: validEmailMail, password: 'krtu&*nmmM', confirmPassword: '12345678913', errorMessage: 'Password must contain at least one number and a special symbol' }],
  ['Password does not contain a special symbol', { email: validEmailMail, password: 'yuiiej23445', confirmPassword: '12345678913', errorMessage: 'Password must contain at least one number and a special symbol' }],
  ['Passwords are not equal', { email: validEmailMail, password: '123456789tg!', confirmPassword: '123456789tv!', errorMessage: 'Passwords do not match' }],
]);

const positiveCasesMap: Map<string, { email: string; password: string; confirmPassword: string; errorMessage: string }> = new Map([
  ['Registration data is valid: email conttains a dot', { email: validEmailMail, password: validPassword, confirmPassword: validPassword, errorMessage: successfulMessage }],
  ['Registration data is valid: gmail.com domain', { email: 'anya.filosof@gmail.com', password: validPassword, confirmPassword: validPassword, errorMessage: successfulMessage }],
  ['Registration data is valid: yandex.ru domain', { email: 'anya.filosof@yandex.ru', password: validPassword, confirmPassword: validPassword, errorMessage: successfulMessage }],
  ['Registration data is valid: custom domain', { email: 'mailbox@afilosof.ru', password: validPassword, confirmPassword: validPassword, errorMessage: successfulMessage }],
]);

describe('Registration form verification', () => {
  describe('Negative cases', () => {
    negativeCasesMap.forEach((parameters, testcase) => {
      const { email, password, confirmPassword, errorMessage } = parameters;
      it(testcase, () => {
        expect(registrationForm.formValidation(email, password, confirmPassword)).to.eq(errorMessage);
      });
    });
  });
  describe('Positive cases', () => {
    positiveCasesMap.forEach((parameters, testcase) => {
      const { email, password, confirmPassword, errorMessage } = parameters;
      it(testcase, () => {
        expect(registrationForm.formValidation(email, password, confirmPassword)).to.eq(errorMessage);
      });
    });
  });
});
