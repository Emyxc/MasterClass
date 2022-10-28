import {devinoVoluntar} from '../../support/pages/index'
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    devinoVoluntar.open();
    devinoVoluntar.submitBtn().click();
  })
})