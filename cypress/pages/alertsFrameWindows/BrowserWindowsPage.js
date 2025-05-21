class BrowserWindowsPage {
    bw_clickNewTabButton() {
        cy.get('#tabButton').click();
    }

    bw_clickNewWindowButton() {
        cy.get('#windowButton').click();
    }

    bw_clickNewWindowMessageButton() {
        cy.get('#messageWindowButton').click();
    }
}

export default BrowserWindowsPage;