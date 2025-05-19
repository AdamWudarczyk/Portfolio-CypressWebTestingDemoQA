class WebTablesPage {
    wt_ep_clickAddButton() {
        cy.get('#addNewRecordButton')
            .should('be.visible').click();
        cy.get('#firstName')
            .should('be.visible');
    }


    wt_ep_clickSubmitButton() {
        cy.get('#submit').click();
    }


    wt_ep_fillWebTableForm(testData) {
        cy.get('#firstName').clear().type(testData.firstName);
        cy.get('#lastName').clear().type(testData.lastName);
        cy.get('#userEmail').clear().type(testData.email);
        cy.get('#age').clear().type(testData.age);
        cy.get('#salary').clear().type(testData.salary);
        cy.get('#department').clear().type(testData.department);
    }

    wt_ep_searchTable(value) {
        cy.get('#searchBox').clear().type(value);
    }

    wt_ep_waitForWebTableForm() {
        cy.get('#userForm')
            .should('be.visible');
    }

    wt_ep_clickEditButton() {
        cy.get('#edit-record-1').click();
        cy.get('#department')
            .should('be.visible');

    }

    wt_ep_editDepartment(newDept) {
        cy.get('#department').clear().type(newDept)
            .should('have.value', newDept);
    }

}

export default WebTablesPage;