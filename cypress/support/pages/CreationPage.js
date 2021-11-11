class CreationPage {
    constructor() {
        this.goToDashboardButton = "[data-cy='dashboard']";
        this.allSetButton = "[data-cy='allSetButton']";
        this.publishButton = "[data-cy='publishGeniallyButton']";
        this.closeModal = "[data-cy='closeModal']";
        this.congratsModal = "[data-cy='congratsPublishModal']";
        this.hamburgerMenu = "[data-cy='hamburgerMenu']";
        this.duplicateGenially = 'Duplicar genially';
        this.geniallyTitleInput = "[data-cy='geniallyTitleInput']";
    }

    /**
     * Click the button in the top left to go back to the Main Page.
     */
    clickDashboard = () => {
        cy.log('Clicking dashboard button.');
        cy.get(this.goToDashboardButton).eq(0).should('be.visible').click();
    }

    /**
     * Click the All Set! Button to start publishing the Genially.
     */
    clickAllSet = () => {
        cy.log('Clicking All Set! button.');
        cy.get(this.allSetButton).eq(0).should('be.visible').click();
    }

    /**
     * Click the All Set! Button to publish the Genially.
     */
    publishGenially = () => {
        cy.log('Clicking All Set! button to confirm and publish the Genially.');
        cy.get(this.publishButton).eq(0).should('be.visible').click();
    }

    /**
     * The modal that is opened after publish get closed.
     */
    closePublishModal = () => {
        cy.log('Closing the modal after publishing.');
        cy.get(this.congratsModal).should('be.visible');
        cy.get(this.closeModal).should('be.visible').eq(0).should('be.visible').click();
    }

    /**
     * Open the hamburger menu in the top right corner.
     */
    openHamburgerMenu = () => {
        cy.log('Clicking the hamburger menu.');
        cy.get(this.hamburgerMenu).eq(0).should('be.visible').click();
    }

    /**
     * Click the menu option to duplicate a Genially
     */
    clickDuplicateGenially = () => {
        cy.log('Clicking the Duplicate Genially option.');
        //This is a way to catch the open method and avoid that a new tab gets open
        cy.window().then(win => {
            cy.stub(win, 'open').callsFake((url, target) => {
                // call the original `win.open` method
                // but pass the `_self` argument
                return win.open.wrappedMethod.call(win, url, '_self')
            }).as('open');
        });
        cy.contains(this.duplicateGenially).eq(0).should('be.visible').click();
        cy.get('@open');
    }

    /**
     * Check that the title of the Genially is the desired
     */
    assertTitle = (name) => {
        cy.log('Asserting title.');
        cy.get('.close-button').eq(0).should('be.visible').click();
        cy.get(this.geniallyTitleInput).eq(0).should('be.visible').should('have.value', name);
    }
}
export default new CreationPage();