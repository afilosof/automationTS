import { ContextPage } from '../support/pageObject/contextPage';
import { PageFactory } from '../support/pageObject/pageFactory';
import { PAGES } from '../support/types';

const contextPage = PageFactory.getPage(PAGES.CONTEXT) as ContextPage;

describe('Verify REVERSO Context Page', () => {
  beforeEach(() => {
    contextPage.openPage();
  });
  it('Verification of the page title', () => {
    contextPage.verifyPageTitle('Reverso Context | Translation in context');
  });
});
