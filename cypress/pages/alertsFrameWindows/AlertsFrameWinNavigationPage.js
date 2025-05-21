class AlertsFrameWinNavigationPage {


    afw_clickBrowserWindows() {
        cy.get('.element-group').contains('Browser Windows').click();
    }

    afw_clickAlerts() {
        cy.get('.element-group').contains('Alerts').click();
    }

    afw_clickFrames() {
        cy.get('.element-group').contains('Frames').click();
    }

    afw_clickNestedFrames() {
        cy.get('.element-group').contains('Nested Frames').click();
    }

    afw_clickModalDialogs() {
        cy.get('.element-group').contains('Modal Dialogs').click();
    }

}

export default AlertsFrameWinNavigationPage;