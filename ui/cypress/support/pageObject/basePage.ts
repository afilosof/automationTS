export class BasePage {
  protected url!: string;

  public openPage() {
    cy.visit(this.url);
  }

  public getPageTitle() {
    return cy.title();
  }

  public verifyPageTitle(pageTitle: string) {
    this.getPageTitle().should('contain', pageTitle);
  }
}
