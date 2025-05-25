describe('Nested Frames test on demoqa.com', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/nestedframes');
    });

    it('should verify content of parent and child frames', () => {

        cy.get('iframe#frame1')
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
            .within(() => {

                cy.contains('Parent frame').should('exist');


                cy.get('iframe')
                    .its('0.contentDocument.body').should('not.be.empty')
                    .then(cy.wrap)
                    .within(() => {

                        cy.contains('Child Iframe').should('exist');
                    });
            });
    });
});