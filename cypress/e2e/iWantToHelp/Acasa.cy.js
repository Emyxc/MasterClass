import {acasa} from '../../support/pages/index'
import * as linkRoutes from '../../support/utils/LinkRoutes'
describe('Acasa', () => {

  //Create the hook for login
  after(() => {
    cy.logout()
  })

  it('Visit the homepage', () => {
    acasa.open()
    cy.navigationMenu(linkRoutes.acasa)
    cy.url().should('eq', 'https://iwanttohelp-vue.herokuapp.com/')
    cy.intercept('https://iwanttohelp.herokuapp.com/public/api/v1/testimonials').as('testimonials')
    cy.wait('@testimonials',{timeout:10000})
  })

  it('Verify the card content', () =>{
    acasa.firstCard().should('contain', 'Alimente')
  })
})