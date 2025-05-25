describe('Modal Dialogs test on demoqa.com', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/modal-dialogs');
    });

    it('should open and close the Small Modal', () => {
        cy.get('#showSmallModal').click();


        cy.get('#example-modal-sizes-title-sm').should('be.visible').and('contain', 'Small Modal');
        cy.get('.modal-body').should('contain.text', 'This is a small modal');


        cy.get('#closeSmallModal').click();


        cy.get('#example-modal-sizes-title-sm').should('not.exist');
    });

    it('should open and close the Large Modal', () => {
        cy.get('#showLargeModal').click();


        cy.get('#example-modal-sizes-title-lg').should('be.visible').and('contain', 'Large Modal');
        cy.get('.modal-body').should('contain.text', 'Lorem Ipsum');


        cy.get('#closeLargeModal').click();


        cy.get('#example-modal-sizes-title-lg').should('not.exist');
    });
});