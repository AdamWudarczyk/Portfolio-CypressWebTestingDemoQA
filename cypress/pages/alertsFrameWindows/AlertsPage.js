class AlertsPage {

    a_afw_visit() {
        cy.visit('https://demoqa.com/alerts');
    }

    a_afw_clickAlertButton() {
        cy.get('#alertButton').click();
    }

    a_afw_clickTimerAlertButton() {
        cy.get('#timerAlertButton').click();
    }

    a_afw_clickConfirmButton() {
        cy.get('#confirmButton').click();
    }

    a_afw_clickPromptButton() {
        cy.get('#promtButton').click();
    }
}

export default AlertsPage;