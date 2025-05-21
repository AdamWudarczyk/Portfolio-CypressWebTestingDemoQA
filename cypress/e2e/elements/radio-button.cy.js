import HomePage from '../../pages/HomePage';
import ElementsNavigation from "../../pages/elements/ElementsNavigationPage";
import RadioButtonPage from "../../pages/elements/RadioButtonPage";




describe('Radio Button', () => {

    const homePage = new HomePage ();
    const elementsPage = new ElementsNavigation ();
    const radioButtonPage = new RadioButtonPage ();

    beforeEach(() => {
        homePage.hp_visit();
        homePage.hp_goToElements();
        elementsPage.ep_clickRadioButton();
    });

    it('selects Yes radio button', () => {
        radioButtonPage.rb_ep_clickYesRadioButton();
        cy.get('.text-success')
            .should('have.text', 'Yes');
    });

    it('selects Impressive radio button', () => {
        radioButtonPage.rb_ep_clickImpressiveRadioButton();
        cy.get('.text-success')
            .should('have.text', 'Impressive');
    });

    it('No radio button should be disabled and not selectable', () => {
        radioButtonPage.rb_ep_clickNoRadioLabel();
        return cy.get('#noRadio')
            .should('be.disabled');
        cy.get('.text-success')
            .should('not.exist');
    });
});
