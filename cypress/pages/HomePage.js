class HomePage {
    hp_visit(){
        cy.visit('https://demoqa.com/')
    }

    hp_goToElements(){
        cy.contains('Elements').click();
    }

    hp_goToForms(){
        cy.contains('Forms').click();
    }

    hp_goToAlertsFrameAndWindows(){
        cy.contains('Alerts').click();
    }

    hp_goToWidgets(){
        cy.contains('Widgets').click();
    }

    hp_goToInteractions(){
        cy.contains('Interaactions').click();
    }

    hp_goToBookStoreApplication (){
        cy.contains('Login').click();
    }
}

export default HomePage;