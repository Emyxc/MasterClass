class Page {
    
    //selectors
   get pageAcasa(){
        return cy.get(`.navbar-nav a[href='/']`)}
   get pageDespreNoi(){
            return cy.get(`.navbar-nav a[href='/']`)

}  


    //actions
    open(path) {
      return cy.visit(path)
    }
  }
  
  export default Page