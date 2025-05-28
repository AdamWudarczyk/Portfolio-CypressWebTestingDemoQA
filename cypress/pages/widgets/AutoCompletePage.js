class AutoCompletePage {
    visit() {
        cy.visit('https://demoqa.com/auto-complete');
    }

    typeMultipleColor(color) {
        cy.get('#autoCompleteMultipleInput').type(`${color}{enter}`);
    }

    getMultipleColorTags() {
        return cy.get('.auto-complete__multi-value');
    }

    typeSingleColor(color) {
        cy.get('#autoCompleteSingleInput').type(`${color}{enter}`);
    }

    getSingleColorValue() {
        return cy.get('.auto-complete__single-value');
    }
}

export default AutoCompletePage;