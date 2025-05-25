class BrowserWindowsPage {
    bw_afw_clickNewTabButton() {
        cy.get('#tabButton').click();
    }

    bw_afw_clickNewWindowButton() {
        cy.get('#windowButton').click();
    }

    bw_afw_clickNewWindowMessageButton() {
        cy.get('#messageWindowButton').click();
    }
}

export default BrowserWindowsPage;