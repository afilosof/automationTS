import { PAGES } from '../types';
import { ContextPage } from './contextPage';
import { RegistrationPage } from './registrationPage';

export class PageFactory {
  static getPage(page: PAGES) {
    switch (page) {
      case PAGES.CONTEXT:
        return new ContextPage();
      case PAGES.REGISTRATION:
        return new RegistrationPage();
      default:
        return new ContextPage();
    }
  }
}
