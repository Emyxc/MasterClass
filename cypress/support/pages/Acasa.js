import Page from './page'
class Acasa extends Page {
  //selectors
  firstCard() {
    return cy.get(".top-section>div:nth-child(1)");
  }

  //actions
  open() {
    return super.open('/')
  }


}


export const acasa = new Acasa();
