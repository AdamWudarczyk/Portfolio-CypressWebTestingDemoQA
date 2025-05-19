class BrokenLinksImagesPage {


    bli_ep_clickValidLink() {
        cy.contains('Click Here for Valid Link')
            .should('have.attr', 'href')
            .then((href) => {
                cy.request(href).then((res) => {
                    expect(res.status).to.eq(200);
                });
            });
    }

    bli_ep_clickBrokenLink() {
        cy.contains('Click Here for Broken Link')
            .should('have.attr', 'href')
            .then((href) => {
                cy.request({ url: href, failOnStatusCode: false }).then((res) => {
                    cy.log(`Status: ${res.status}`);
                    expect(res.status).to.eq(500);
                });
            });
    }

    bli_ep_clickValidImage() {
        cy.get('img[src="/images/Toolsqa.jpg"]')
            .should('exist')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    }

    bli_ep_clickBrokenImage() {
        cy.get('img[src="/images/Toolsqa_1.jpg"]')
            .should('exist')
            .and(($img) => {
                expect($img[0].naturalWidth).to.equal(0);
            });
    }
}

export default BrokenLinksImagesPage;