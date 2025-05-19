import HomePage from '../../pages/HomePage';
import DynamicPropertiesPage from "../../pages/elements/DynamicPropertiesPage";
import ElementsNavigation from "../../pages/elements/ElementsNavigationPage";



describe ('Dynamic Properties',() => {

    const homePage = new HomePage ();
    const elementsPage = new ElementsNavigation ();
    const dynamicProperties = new DynamicPropertiesPage ();

    beforeEach(()=> {
        homePage.hp_visit();
        homePage.hp_goToElements();
        elementsPage.ep_clickDynamicProperties();
    })

    it('should enable "Will enable 5 Seconds" button after delay', () => {
        cy.get('#enableAfter', { timeout: 6000 })
            .should('be.visible');
    });

    it('should display "Visible After 5 Seconds" button after delay', () => {
        cy.get('#visibleAfter', { timeout: 6000 })
            .should('be.visible');
    });

    it('should display red color after click on the button', () => {
        cy.get('#colorChange', { timeout: 6000 })
            .should('have.css', 'color', 'rgb(220, 53, 69)');
    });


});