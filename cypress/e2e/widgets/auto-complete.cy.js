import AutoCompletePage from '../../pages/widgets/AutoCompletePage';

const autoCompletePage = new AutoCompletePage();

describe('Auto Complete tests on demoqa.com', () => {
    beforeEach(() => {
        autoCompletePage.visit();


        cy.get('body').then(() => {
            cy.get('#fixedban').invoke('remove');
            cy.get('footer').invoke('remove');
        });
    });

    it('should select multiple colors', () => {
        autoCompletePage.typeMultipleColor('Red');
        autoCompletePage.typeMultipleColor('Green');
        autoCompletePage.typeMultipleColor('Blue');

        autoCompletePage.getMultipleColorTags().should('have.length', 3);
        autoCompletePage.getMultipleColorTags().eq(0).should('contain.text', 'Red');
        autoCompletePage.getMultipleColorTags().eq(1).should('contain.text', 'Green');
        autoCompletePage.getMultipleColorTags().eq(2).should('contain.text', 'Blue');
    });

    it('should select and replace single color', () => {
        autoCompletePage.typeSingleColor('Blue');
        autoCompletePage.getSingleColorValue().should('contain.text', 'Blue');

        autoCompletePage.typeSingleColor('Green');
        autoCompletePage.getSingleColorValue().should('contain.text', 'Green');
    });
});