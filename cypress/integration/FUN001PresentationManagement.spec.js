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
})

describe('FUN001 Presentation Management', function () {
    const geniallyName = 'PRESENTACIÓN BÁSICA';
    /**
     * In this test, we login into an account to create a presentation and finally 
     * delete it to check that it remains in the bin
     */
    it('CP01 Deleted presentations are kept in the bin', function () {
        MainPage.clickCreateGenially();
        MainPage.clickPresentation();
        MainPage.clickATemplate();
        MainPage.clickUseTemplate();
        MainPage.selectAllTemplates();
        MainPage.addTheSelectedPages();

        CreationPage.clickDashboard();

        MainPage.openGeniallyDropdown(geniallyName);
        MainPage.deleteAGenially();
        MainPage.clickBinButton(geniallyName);
    }); 
}); 