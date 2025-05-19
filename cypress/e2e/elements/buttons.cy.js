import HomePage from '../../pages/HomePage';
import ButtonsPage from "../../pages/elements/ButtonsPage";
import ElementsNavigation from "../../pages/elements/ElementsNavigationPage";




describe('Buttons', () => {

    const homePage = new HomePage();
    const buttonsPage = new ButtonsPage();
    const elementsNavigation = new ElementsNavigation();

    beforeEach(() => {
        Cypress.on('uncaught:exception', () => false);
        homePage.hp_visit();
        homePage.hp_goToElements();
        elementsNavigation.ep_clickButtons();
    });

    it('Double, Right and Dynamic Click check', () => {
        buttonsPage.b_ep_clickDoubleClickButton();
        buttonsPage.b_ep_clickRightClickButton();
        buttonsPage.b_ep_clickDynamicButton();

        cy.get("#doubleClickMessage")
            .should('contain','You have done a double click');
        cy.get("#rightClickMessage")
            .should('contain','You have done a right click');
        cy.get("#dynamicClickMessage")
            .should('contain','You have done a dynamic click');

    });
});
