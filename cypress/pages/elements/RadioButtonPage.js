class RadioButtonPage {
    rb_ep_clickYesRadioButton () {
        cy.get('label[for="yesRadio"]').click();
    }

    rb_ep_clickImpressiveRadioButton () {
        cy.get('label[for="impressiveRadio"]').click();
    }

    rb_ep_clickNoRadioLabel() {
        cy.get('label[for="noRadio"]').click();
    }
}

export default RadioButtonPage;