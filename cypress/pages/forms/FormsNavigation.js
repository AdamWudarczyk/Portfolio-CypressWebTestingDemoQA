class FormsNavigation {

    nf_clickPracticeForms() {
        cy.get('.element-group').contains('Practice Form').click();
    }

}

export default FormsNavigation;