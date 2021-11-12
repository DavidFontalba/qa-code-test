/**
 * Tests related to Account Management functionallity
 * @author David Galván Fontalba
 * @version 1
 */
import env from '../config/config.json'
import data from '../fixtures/FUN002AccountManagement.json'
import LoginPage from '../support/pages/LoginPage.js'
import MainPage from '../support/pages/MainPage.js'
import AccountSettingsPage from '../support/pages/AccountSettingsPage.js'

beforeEach(() => {
    cy.log('Joining the web.')
    cy.viewport(1920, 1080);
    cy.visit(env.webURL);
    //Login
    LoginPage.clickLogin();
    LoginPage.insertEmail(data.credentials.email);
    LoginPage.insertPassword(data.credentials.password);
    LoginPage.clickLoginSubmitButton();

    //Navigate to Account Settings
    MainPage.openUserProfileSection();
    MainPage.openAccountSettings();
})

describe('FUN002 Account Management', function () {
    /**
     * In this test, we login into an account to modify our profile image
     * and the About me field.
     */
    it('CP01 Modify My profile', function () {
        AccountSettingsPage.writeOnAboutMe();
        AccountSettingsPage.uploadProfileImage();

        MainPage.clickDashboard();
        MainPage.openUserProfileSection();
        MainPage.openAccountSettings();

        AccountSettingsPage.assertImageHasChanged();
    });

    /**
     * In this test, we login into an account to modify our profile and
     * activate all the notifications.
     */
    it('CP02 Notifications', function () {
        AccountSettingsPage.goToNotifications();
        AccountSettingsPage.markAllCheckboxes();

        MainPage.clickDashboard();
        MainPage.openUserProfileSection();
        MainPage.openAccountSettings();

        AccountSettingsPage.goToNotifications();
        AccountSettingsPage.unmarkAllCheckboxes();

    });
});