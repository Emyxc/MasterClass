describe('API request', () => {
    //it block with POST request
    it('Verify request to GET testimonials', () => {
        cy.request(
            'GET',
            'https://iwanttohelp.herokuapp.com/public/api/v1/testimonials').then((response) => {


            expect(response.status, 'Request status should be 200')
                    .to.eq(200)    
            expect(response, 'response to have property body')
                    .property('body')
            expect(response.body[0].user.first_name)
                    .to.eq("Bogdan")
            //add another expect to get the message from the second user       
           
            //using fixure file
            cy.writeFile('cypress/fixtures/user.json', response.body[0])
            // our fixture file is now generated and can be used
            cy.fixture('user').then((user) => {
                    expect(user.user.first_name).to.exist
            
            })
        })
    })

    //it block with POST request
})