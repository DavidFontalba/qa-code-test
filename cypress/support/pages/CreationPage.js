class CreationPage {
    constructor() {
        this.goToDashboardButton = "[data-cy='dashboard']";
        this.allSetButton = "[data-cy='allSetButton']";
        this.publishButton = "[data-cy='publishGeniallyButton']";
        this.closeModal = "[data-cy='closeModal']";
        this.congratsModal = "[data-cy='congratsPublishModal']";
    }

    /**
     * Click the button in the top left to go back to the Main Page.
     */
    clickDashboard = () => {
        cy.log('Clicking dashboard button.');
        cy.get(this.goToDashboardButton).eq(0).should('be.visible').click();
    }

    /**
     * Click the All Set! Button to start publishing the Genially
     */
    clickAllSet = () => {
        cy.log('Clicking All Set! button.');
        cy.get(this.allSetButton).eq(0).should('be.visible').click();
    }

    /**
     * Click the All Set! Button to publish the Genially
     */
    publishGenially = () => {
        cy.log('Clicking All Set! button to confirm and publish the Genially.');
        cy.get(this.publishButton).eq(0).should('be.visible').click();
    }

    /**
     * The modal that is opened after publish get closed
     */
    closePublishModal = () => {
        cy.log('Closing the modal after publishing.');
        cy.get(this.congratsModal).should('be.visible');
        cy.get(this.closeModal).should('be.visible').eq(0).should('be.visible').click();
    }

}
export default new CreationPage();