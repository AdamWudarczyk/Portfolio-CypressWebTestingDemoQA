import HomePage from '../../pages/HomePage';
import FormsNavigation from "../../pages/forms/FormsNavigation";
import PracticeForms from "../../pages/forms/PracticeForm";


describe('Practice Form', () => {
    let testData;

    const homePage = new HomePage();
    const formsNavigation = new FormsNavigation();
    const practiceForms = new PracticeForms();

    before(() => {
        cy.fixture('practiceFormData.json').then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        homePage.hp_visit();
        homePage.hp_goToForms();
        formsNavigation.nf_clickPracticeForms();
    });

    it('Fills out the Practice Form and checks the submitted data', () => {

        cy.get('#firstName').type(testData.firstName);
        cy.get('#lastName').type(testData.lastName);
        cy.get('#userEmail').type(testData.userEmail);
        cy.get(`input[name="gender"][value="${testData.gender}"]`).check({ force: true });
        cy.get('#userNumber').type(testData.userNumber);
        practiceForms.nf_pf_setDateOfBirth(testData.dateOfBirth);
        cy.get('#subjectsInput').type(`${testData.subjectsContainer}{enter}`);
        cy.contains('label', testData.hobbies).click();
        practiceForms.pf_uploadPicture('test_upload_file.png');
        cy.get('#currentAddress').type(testData.currentAddress);
        cy.get('#state').click({ force: true });
        cy.get('#react-select-3-input').should('be.visible').type(`${testData.state}{enter}`, { force: true });
        cy.get('#city').click({ force: true });
        cy.get('#react-select-4-input').should('be.visible').type(`${testData.city}{enter}`, { force: true });


        cy.get('#submit').click();

        cy.get('table').should('contain', testData.firstName);
        cy.get('table').should('contain', testData.lastName);
        cy.get('table').should('contain', testData.userEmail);
        cy.get('table').should('contain', testData.gender);
        cy.get('table').should('contain', testData.dateOfBirth);
        cy.get('table').should('contain', testData.subjectsContainer);
        cy.get('table').should('contain', testData.hobbies);
        cy.get('table').should('contain', testData.currentAddress);
        cy.get('table').should('contain.text', 'Picture').and('contain.text', 'test_upload_file.png');
        cy.get('table').should('contain', testData.state);
        cy.get('table').should('contain', testData.city);

    });
});