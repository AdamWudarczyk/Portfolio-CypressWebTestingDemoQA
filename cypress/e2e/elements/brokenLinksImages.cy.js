import HomePage from '../../pages/HomePage';
import BrokenLinksImagesPage from "../../pages/elements/BrokenLinksImagesPage";
import ElementsNavigation from "../../pages/elements/ElementsNavigationPage";

describe('Broken Links - Images', () => {

    const homePage = new HomePage();
    const brokenLinksImagesPage = new BrokenLinksImagesPage();
    const elementsNavigation = new ElementsNavigation();

    beforeEach(() => {
        homePage.hp_visit();
        homePage.hp_goToElements();
        elementsNavigation.ep_clickBrokenLinksImages();
    });

    it('Valid link should work', () => {
        brokenLinksImagesPage.bli_ep_clickValidLink();
    });

    it('Broken link should lead to 500', () => {
        brokenLinksImagesPage.bli_ep_clickBrokenLink();
    });

    it('Valid image should be visible', () => {
        brokenLinksImagesPage.bli_ep_clickValidImage();
    });

    it('Broken image should not load', () => {
        brokenLinksImagesPage.bli_ep_clickBrokenImage();
    });
});