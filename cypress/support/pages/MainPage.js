import "cypress-real-events/support";

class MainPage {
    constructor() {
        this.createGeniallyButton = "[data-cy='createGenially']";
        this.presentationButton = "[data-cy='presentation']";
        this.templateItem = "[data-cy='templateItem']";
        this.useTemplateButton = "[data-cy='useTemplate']";
        this.allTemplatesCheck = "[data-cy='allTemplates']";
        this.addButton = "[data-cy='addSlides']";
        this.geniallyDropdown = "[data-cy='geniallyDropdown']";
        this.markAsDeletedOption = "[data-cy='markAsDeletedOption']";
        this.confirmDelete = "[data-cy='markAsDeleteButton']";
        this.binButton = "[data-cy='recycleBin']";
    }

    /**
     * Click the button to start creating a Genially.
     */
    clickCreateGenially = () => {
        cy.log('Clicking Create Genially button.');
        cy.get(this.createGeniallyButton).eq(0).should('be.visible').click();
    }

    /**
     * Click the presentation button to choose a template.
     */
     clickPresentation = () => {
        cy.log('Clicking Presentation button.');
        cy.get(this.presentationButton).eq(0).should('be.visible').click();
    }

    /**
     * Click a template item to choose the template.
     */
     clickATemplate = () => {
        cy.log('Clicking a template.');
        cy.get(this.templateItem).eq(0).should('be.visible').click();
    }

    /**
     * Confirms the template.
     */
     clickUseTemplate = () => {
        cy.log('Clicking Use Template button.');
        cy.get(this.useTemplateButton).eq(0).should('be.visible').click();
    }

    /**
     * Check the checkbox that selects all the pages
     */
     selectAllTemplates = () => {
        cy.log('Checking all the pages.');
        cy.get(this.allTemplatesCheck).eq(0).should('be.visible').check();
    }

    /**
     * Add the selected pages to create a Genially
     */
     addTheSelectedPages = () => {
        cy.log('Adding all the selected pages.');
        cy.get(this.addButton).eq(0).should('be.visible').click();
    }

    /**
     * Opens the dropdown over a Genially
     */
     openGeniallyDropdown = (name) => {
        cy.log('Clicking the Genially Dropdown.');
        cy.get(`[data-cy='geniallyItem${name}']`).eq(0).should('be.visible').realHover();
        cy.get(this.geniallyDropdown).eq(0).should('be.visible').click();
    }

    /**
     * Clicks the delete option in the genially dropdown and accept the confirmation for the action.
     */
     deleteAGenially = () => {
        cy.log('Deleting a Genially.');
        cy.get(this.markAsDeletedOption).eq(0).should('be.visible').click();
        cy.get(this.confirmDelete).eq(0).should('be.visible').click();
    }

    /**
     * Click on Bin icon at Side menu and checks that the deleted Genially is there
     */
     clickBinButton = (name) => {
        cy.log('Navigating to Bin');
        cy.get(this.binButton).eq(0).should('be.visible').click();
        cy.get(`[data-cy='deletedGenially${name}']`).eq(0).should('be.visible');
    }


}
export default new MainPage();