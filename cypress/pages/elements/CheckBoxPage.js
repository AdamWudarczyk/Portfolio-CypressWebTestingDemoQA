class CheckBoxPage {
    cb_ep_clickCheckBoxTrue (){
        cy.contains('label', 'Home').find('.rct-checkbox').click();
    }

    cb_ep_clickCheckBoxFalse (){
        cy.contains('label', 'Home').find('.rct-checkbox').click();
    }
}

export default CheckBoxPage;