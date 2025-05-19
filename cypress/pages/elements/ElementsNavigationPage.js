class ElementsNavigation {
    ep_clickTextBox() {
        cy.get('.element-group').contains('Text Box').click();
    }

    ep_clickCheckBox() {
        cy.get('.element-group').contains('Check Box').click();
    }

    ep_clickRadioButton() {
        cy.get('.element-group').contains('Radio Button').click();
    }

    ep_clickWebTables() {
        cy.get('.element-group').contains('Web Tables').click();
    }

    ep_clickButtons() {
        cy.get('.element-group').contains('Buttons').click();
    }

    ep_clickLinks() {
        cy.get('.element-group').contains('Links').click();
    }

    ep_clickBrokenLinksImages() {
        cy.get('.element-group').contains('Broken Links - Images').click();
    }

    ep_clickUploadAndDownload() {
        cy.get('.element-group').contains('Upload and Download').click();
    }

    ep_clickDynamicProperties() {
        cy.get('.element-group').contains('Dynamic Properties').click();
    }
}

export default ElementsNavigation;