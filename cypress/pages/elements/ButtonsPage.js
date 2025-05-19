class ButtonsPage {
    b_ep_clickDoubleClickButton() {
        cy.get('#doubleClickBtn').dblclick();
    }

    b_ep_clickRightClickButton() {
        cy.get('#rightClickBtn').rightclick();
    }

    b_ep_clickDynamicButton() {
        cy.get('.btn.btn-primary').last().click();
    }
}

export default ButtonsPage;