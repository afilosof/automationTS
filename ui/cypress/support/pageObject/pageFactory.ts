import { PAGES } from '../types';
import { ContextPage } from './contextPage';

export class PageFactory {
  static getPage(page: PAGES) {
    switch (page) {
      case PAGES.CONTEXT:
        return new ContextPage();
      default:
        return new ContextPage();
    }
  }
}
