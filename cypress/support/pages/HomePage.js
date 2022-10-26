class HomePage {
  firstCard() {
    return cy.get(".top-section>div:nth-child(1)");
  }
}

export const homePage = new HomePage();
