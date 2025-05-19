import HomePage from '../../pages/HomePage';
import ElementsNavigation from "../../pages/elements/ElementsNavigationPage";
import TextBoxPage from "../../pages/elements/TextBoxPage";




describe('Text Box', () => {
    let testData;

    const homePage = new HomePage();
    const elementsNavigation = new ElementsNavigation();
    const textBoxPage = new TextBoxPage();

    before(() => {
        cy.fixture('textBoxData.json').then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        homePage.hp_visit();
        homePage.hp_goToElements();
        elementsNavigation.ep_clickTextBox();
    });

    it('Fills out the text box and checks out the data provided', () => {
        cy.get('#userName').type(testData.name);
        cy.get('#userEmail').type(testData.email);
        cy.get('#currentAddress').type(testData.currentAddress);
        cy.get('#permanentAddress').type(testData.permanentAddress);

        cy.get('#submit').click();


        cy.get('#output')
            .should('contain', testData.name);
        cy.get('#output')
            .should('contain', testData.email);
        cy.get('#output')
            .should('contain', testData.currentAddress);
        cy.get('#output')
            .should('contain', testData.permanentAddress);
    });
});