import HomePage from '../../pages/HomePage';
import ElementsNavigation from "../../pages/elements/ElementsNavigationPage";
import WebTablesPage from "../../pages/elements/WebTablesPage";



describe ('Web Tables',() => {
    let testData;

    const homePage = new HomePage ();
    const elementsNavigation = new ElementsNavigation ();
    const webTablesPage = new WebTablesPage ();


    before (() => {
      cy.fixture('web-table-form-data.json').then((data) => {
          testData = data;
      });
    });

    beforeEach(()=> {
        homePage.hp_visit();
        homePage.hp_goToElements();
        elementsNavigation.ep_clickWebTables();
    });

    it('fills form and submits new record', () => {
        webTablesPage.wt_ep_clickAddButton();
        webTablesPage.wt_ep_waitForWebTableForm();
        webTablesPage.wt_ep_fillWebTableForm(testData);
        webTablesPage.wt_ep_clickSubmitButton();

        cy.get('.rt-tbody')
            .should('contain', testData.firstName)
            .and('contain', testData.lastName)
            .and('contain', testData.email)
            .and('contain', testData.age)
            .and('contain', testData.salary)
            .and('contain', testData.department);
    });

    it('searches by name and verifies filtered results', () => {
        webTablesPage.wt_ep_searchTable('Alden');

        cy.get('.rt-tbody')
            .should('exist')
            .and('be.visible')
            .should('contain', 'Alden')
            .and('not.contain', 'Cierra');
    });

    it('edits existing record and verifies update', () => {
        webTablesPage.wt_ep_clickEditButton();
        webTablesPage.wt_ep_editDepartment('Finance');
        webTablesPage.wt_ep_clickSubmitButton();

        cy.get('.rt-tbody')
            .should('contain', 'Finance');
    });


});