import { ContextPage } from '../support/pageObject/contextPage';
import { PageFactory } from '../support/pageObject/pageFactory';
import { PAGES, LANGUAGES } from '../support/types';

const contextPage = PageFactory.getPage(PAGES.CONTEXT) as ContextPage;
const contextEN = 'beautiful';

describe('Verify REVERSO Context Page', () => {
  beforeEach(() => {
    contextPage.openPage();
    contextPage.allowDataProcessing();
  });

  it('Verification of the page title', () => {
    contextPage.verifyPageTitle('Reverso Context | Translation in context');
  });

  it(`Find GERMAN context`, () => {
    contextPage.switchLanguage(LANGUAGES.GERMAN);
    contextPage.verifyLanguageIsSelected(LANGUAGES.GERMAN);
    contextPage.fillContext(contextEN);
    contextPage.searchContext();
    contextPage.verifyContextIsFound(contextEN, LANGUAGES.GERMAN);
  });

  it(`Find FRENCH context`, () => {
    contextPage.switchLanguage(LANGUAGES.FRENCH);
    contextPage.verifyLanguageIsSelected(LANGUAGES.FRENCH);
    contextPage.fillContext(contextEN);
    contextPage.searchContext();
    contextPage.verifyContextIsFound(contextEN, LANGUAGES.FRENCH);
  });
});
