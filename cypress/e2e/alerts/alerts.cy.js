import AlertsPage from '../../pages/alertsFrameWindows/AlertsPage';
import AlertsFrameWinNavigationPage from '../../pages/alertsFrameWindows/AlertsFrameWinNavigationPage';
import HomePage from '../../pages/HomePage';

describe('Alerts Page', () => {
    const homePage = new HomePage();
    const alertsNav = new AlertsFrameWinNavigationPage();
    const alerts = new AlertsPage();

    beforeEach(() => {
        homePage.hp_visit();
        homePage.hp_goToAlertsFrameAndWindows();
        alertsNav.afw_clickAlerts();


        cy.url().should('include', '/alerts');
    });

    it('should handle standard alert', () => {
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });

        alerts.a_afw_clickAlertButton();
        cy.get('@alertStub').should('have.been.calledWith', 'You clicked a button');
    });

    it('should handle delayed alert', () => {
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });

        alerts.a_afw_clickTimerAlertButton();
        cy.wait(5000);
        cy.get('@alertStub').should('have.been.calledWith', 'This alert appeared after 5 seconds');
    });

    it('should handle confirm alert - OK', () => {
        cy.on('window:confirm', (text) => {
            expect(text).to.eq('Do you confirm action?');
            return true;
        });

        alerts.a_afw_clickConfirmButton();
        cy.get('#confirmResult').should('contain.text', 'You selected Ok');
    });

    it('should handle confirm alert - Cancel', () => {
        cy.on('window:confirm', () => false);
        alerts.a_afw_clickConfirmButton();
        cy.get('#confirmResult').should('contain.text', 'You selected Cancel');
    });

    it('should handle prompt alert', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Adam');
        });

        alerts.a_afw_clickPromptButton();
        cy.get('#promptResult').should('contain.text', 'You entered Adam');
    });
});