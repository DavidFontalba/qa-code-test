class CreationPage {
    constructor() {
        this.goToDashboardButton = "[data-cy='dashboard']";
    }

    /**
     * Click the button in the top left to go back to the Main Page.
     */
    clickDashboard = () => {
        cy.log('Clicking dashboard button.');
        cy.get(this.goToDashboardButton).eq(0).should('be.visible').click();
    }

}
export default new CreationPage();