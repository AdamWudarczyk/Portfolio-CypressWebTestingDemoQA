class PracticeForms {

    nf_pf_setDateOfBirth(dateString) {
        cy.get('#dateOfBirthInput').click();

        const date = new Date(dateString); // poprawnie przetworzy np. "19 May 2025" lub "2025-05-19"
        const day = String(date.getDate()).padStart(2, '0');
        const month = date.toLocaleString('en-US', { month: 'long' });
        const year = String(date.getFullYear());

        cy.get('.react-datepicker__year-select').select(year);
        cy.get('.react-datepicker__month-select').select(month);
        cy.get('.react-datepicker__day--0' + day)
            .not('.react-datepicker__day--outside-month')
            .click();
    }

    pf_uploadPicture(fileName) {
        cy.get('#uploadPicture').attachFile(fileName);
    }

}

export default PracticeForms;