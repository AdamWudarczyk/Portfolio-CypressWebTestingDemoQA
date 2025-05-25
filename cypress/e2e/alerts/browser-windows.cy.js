import HomePage from '../../pages/HomePage';
import AlertsFrameWinNavigationPage from "../../pages/alertsFrameWindows/AlertsFrameWinNavigationPage";
import BrowserWindowsPage from '../../pages/alertsFrameWindows/BrowserWindowsPage';

describe('Browser Windows', () => {
    const homePage = new HomePage();
    const alertsNav = new AlertsFrameWinNavigationPage();
    const browserWindows = new BrowserWindowsPage();

    beforeEach(() => {
        homePage.hp_visit();
        homePage.hp_goToAlertsFrameAndWindows();
        alertsNav.afw_clickBrowserWindows();
    });

    it('should intercept window.open for New Tab button', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        browserWindows.bw_afw_clickNewTabButton();
        cy.get('@windowOpen').should('be.calledWith', '/sample');
    });

    it('should intercept window.open for New Window button', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        browserWindows.bw_afw_clickNewWindowButton();
        cy.get('@windowOpen').should('be.calledWith', '/sample');
    });

    it('should intercept window.open for New Window Message button', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        browserWindows.bw_afw_clickNewWindowMessageButton();
        cy.get('@windowOpen').should('be.called');
    });
});