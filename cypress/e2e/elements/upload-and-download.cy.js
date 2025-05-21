import HomePage from '../../pages/HomePage';
import ElementsNavigation from "../../pages/elements/ElementsNavigationPage";
import UploadDownloadPage from "../../pages/elements/UploadDownloadPage";




describe('Upload and Download', () => {
    const homePage = new HomePage();
    const elementsNavigation = new ElementsNavigation();
    const uploadDownloadPage = new UploadDownloadPage();

    beforeEach(() => {
        homePage.hp_visit();
        homePage.hp_goToElements();
        elementsNavigation.ep_clickUploadAndDownload();
    });

    it('should download the file', () => {
        uploadDownloadPage.uad_ep_clickDownload();

        cy.downloadFile(
            'https://demoqa.com/downloadFile',
            'cypress/downloads',
            'sampleFile.jpeg'
        );

        cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');

        const fileName = 'test-upload-file.png';
        cy.get('#uploadFile').attachFile(fileName);
        cy.get('#uploadedFilePath')
            .should('contain', fileName);

    });
});