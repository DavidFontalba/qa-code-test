/**
 * Page Object Model for Account Settings
 * @author David Galván Fontalba
 * @version 1
 */
import 'cypress-file-upload';

class AccountSettingsPage {
    constructor() {
        this.uploadImage = '#edit-button-upload-file-control';
        this.aboutMeInput = '#about-me input';
        this.notificationsTab = "[data-cy='Notificaciones']";
        this.checkboxInputs = "input[type='checkbox']";
    }

    /**
     * Change the value of the About Me input 
     */
    writeOnAboutMe = () => {
        cy.log('Modifying About Me.');
        cy.get(this.aboutMeInput).eq(0).should('be.visible').then((input) => {
            const actualValue = input.val();
            let value;
            if (actualValue === 'Learning about QA :)') {
                value = 'QA rules!';
            } else {
                value = 'Learning about QA :)';
            }
            cy.get(this.aboutMeInput).clear().type(value).blur().should('have.value', value);
        });
    }

    /**
     * Upload a profile image
     */
    uploadProfileImage = () => {
        cy.log('Uploading a profile image.');
        //Depending of the string in About Me, we put a picture, so we can prove that it is changing
        cy.get(this.aboutMeInput).eq(0).should('be.visible').then((input) => {
            let value = input.val();
            let filepath;
            if (value === 'Learning about QA :)') {
                filepath = 'testPicture.jpeg';
            } else {
                filepath = 'testPicture2.jpeg';
            }
            cy.screenshot('FUN002CP01. Profile image before upload.');
            cy.get(this.uploadImage).eq(0).attachFile(filepath);
        });
    }

    /**
     * Wait a while for the aplication to refresh the profile image and take a screenshot
     */
    assertImageHasChanged = () => {
        cy.log('Taking a screenshot.');
        cy.get(this.aboutMeInput).eq(0).should('be.visible');

        /* The use of cy.wait is not a good practice, but in this case I needed it
        to give some time to the aplication to refresh the profile image. */
        cy.wait(2500);
        cy.screenshot('FUN002CP01. Profile image after upload.');
    }

    /**
     * Click the Notification tab in the top of the Account Settings
     */
    goToNotifications = () => {
        cy.log('Clicking in Notifications tab.');
        cy.get(this.notificationsTab).eq(0).should('be.visible').click();
    }

    /**
     * Mark all the notifications checkboxes
     */
    markAllCheckboxes = () => {
        cy.log('Activating all the notifications');
        cy.screenshot('FUN002CP02. Checkboxes unmarked.');
        cy.get(this.checkboxInputs).check();
    }

    /**
     * Unmark all the notifications checkboxes
     */
     unmarkAllCheckboxes = () => {
        cy.log('Deactivating all the notifications');
        cy.screenshot('FUN002CP02. Checkboxes marked.');
        cy.get(this.checkboxInputs).uncheck();
    }
}
export default new AccountSettingsPage();