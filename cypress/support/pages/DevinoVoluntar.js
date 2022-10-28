import Page from './page'
class DevinoVoluntar extends Page {
    
  //selectors
  submitBtn() {
    return cy.get(".btn-primary");
  }


    //actions
    open() {
        return super.open('/auth/register')
      }
    

}

export const devinoVoluntar = new DevinoVoluntar()