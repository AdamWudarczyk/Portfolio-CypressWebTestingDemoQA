import HomePage from '../../pages/HomePage';
import LinksPage from "../../pages/elements/LinksPage";
import ElementsNavigation from "../../pages/elements/ElementsNavigationPage";




describe ('Links',() => {

    const homePage = new HomePage ();
    const elementsNavigation = new ElementsNavigation ();
    const linksPage = new LinksPage ();

    beforeEach(()=> {
        homePage.hp_visit();
        homePage.hp_goToElements();
        elementsNavigation.ep_clickLinks();
    })

    it('should redirect to Home page after clicking Home link', () => {
        linksPage.lk_ep_clickHomeLinkWithForce();
        cy.url().should('eq', 'https://demoqa.com/');
    });


});