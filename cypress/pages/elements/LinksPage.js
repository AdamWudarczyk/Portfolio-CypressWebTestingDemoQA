class LinksPage {
    lk_ep_clickHomePage(){
        return cy.get('#simpleLink');
    }

    lk_ep_clickHomeLinkWithForce(){
        cy.get('#simpleLink')
            .should('have.attr', 'href', 'https://demoqa.com')
            .invoke('removeAttr', 'target')
            .click();
    }
}

export default LinksPage;