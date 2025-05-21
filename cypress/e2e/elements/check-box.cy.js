import HomePage from '../../pages/HomePage';
import CheckBoxPage from "../../pages/elements/CheckBoxPage";
import ElementsNavigation from "../../pages/elements/ElementsNavigationPage";




describe ('Check Box',() => {

    const homePage = new HomePage();
    const checkBox = new CheckBoxPage();
    const elementsNavigation = new ElementsNavigation();

    beforeEach(()=> {
        homePage.hp_visit();
        homePage.hp_goToElements();
        elementsNavigation.ep_clickCheckBox();
    })

    it('checks and unchecks the Home checkbox', () => {
        checkBox.cb_ep_clickCheckBoxTrue();
        cy.get('#tree-node-home')
            .should('be.checked');

        checkBox.cb_ep_clickCheckBoxFalse();
        cy.get('#tree-node-home')
            .should('not.be.checked');
    });


});