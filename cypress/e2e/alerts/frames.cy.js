describe('Frames test on demoqa.com', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/frames');
    });

    it('should verify content of frame1', () => {
        cy.getIframeBody('#frame1').within(() => {
            cy.get('h1').should('have.text', 'This is a sample page');
        });
    });

    it('should verify content of frame2', () => {
        cy.getIframeBody('#frame2').within(() => {
            cy.get('h1').should('have.text', 'This is a sample page');
        });
    });
});