class AccordianPage {
    visit() {
        cy.visit('https://demoqa.com/accordian');
    }

    clickSection(sectionNumber) {
        cy.get(`#section${sectionNumber}Heading`).click({ force: true });
    }

    getSectionContent(sectionNumber) {
        return cy.get(`#section${sectionNumber}Content`);
    }

    getSectionBody(sectionNumber) {
        return cy.get(`#section${sectionNumber}Content`)
            .invoke('text');
    }
}

export default AccordianPage;