import env from '../config/config.json'
import data from '../fixtures/FUN001PresentationManagement.json'
import LoginPage from '../support/pages/LoginPage.js'
import MainPage from '../support/pages/MainPage.js'
import CreationPage from '../support/pages/CreationPage.js'

beforeEach(() => {
    cy.log('Joining the web.')
    cy.viewport(1920, 1080);
    cy.visit(env.webURL);
    //Login
    LoginPage.clickLogin();
    LoginPage.insertEmail(data.credentials.email);
    LoginPage.insertPassword(data.credentials.password);
    LoginPage.clickLoginSubmitButton();

    //Create a Basic Genially
    MainPage.clickCreateGenially();
    MainPage.clickPresentation();
    MainPage.clickATemplate();
    MainPage.clickUseTemplate();
    MainPage.selectAllTemplates();
    MainPage.addTheSelectedPages();
})

describe('FUN001 Presentation Management', function () {
    const geniallyName = 'PRESENTACIÓN BÁSICA';
    /**
     * In this test, we login into an account to create a presentation and finally 
     * delete it to check that it remains in the bin
     */
    it('CP01 Deleted presentations are kept in the bin', function () {
        CreationPage.clickDashboard();

        MainPage.hoverGenially(geniallyName);
        MainPage.openGeniallyDropdown();
        MainPage.deleteAGenially();
        MainPage.clickBinButton(geniallyName);
    });

    /**
     * In this test, we login into an account to create and publish a presentation and
     * finally go back to the Dashboard to check that it have all the properly options
     */
    it('CP02 Publish', function () {
        CreationPage.clickAllSet();
        CreationPage.publishGenially();
        CreationPage.closePublishModal();

        CreationPage.clickDashboard();

        MainPage.hoverGenially(geniallyName);
        MainPage.assertGeniallyIsPublic();
    });

    /**
    * In this test, we login into an account to create and copy a presentation and
    * finally go back to the Dashboard to check that both Genially exists
    */
    it('CP03  Duplicate a Genially', function () {
        CreationPage.openHamburgerMenu();
        CreationPage.clickDuplicateGenially();
        CreationPage.assertTitle(`Copia - ${geniallyName}`)

        CreationPage.clickDashboard();

        MainPage.assertGeniallyCopied(geniallyName);
    });
});