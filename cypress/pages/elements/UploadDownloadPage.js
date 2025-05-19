class UploadDownloadPage {
    uad_ep_clickDownload() {
        cy.get('#downloadButton')
            .should('be.visible').click();
    }
}

export default UploadDownloadPage;