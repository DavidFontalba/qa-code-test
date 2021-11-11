class LoginPage {
    constructor() {
        this.loginButton = "[data-cy='loginButton']";
        this.emailInput = "[data-cy='loginEmailInput']";
        this.passwordInput = "[data-cy='loginPasswordInput']";
        this.loginSubmitButton = "[data-cy='loginSubmitButton']";
    }

    /**
     * Click the button in the top menu to start the login proccess.
     */
    clickLogin = () => {
        cy.log('Clicking login button.');
        cy.get(this.loginButton).eq(0).should('be.visible').click();
    }

    /**
     * Inserts the email into the email input to login.
     * @param {String} email 
     */
    insertEmail = (email) => {
        cy.log('Introducing email to login.');
        cy.get(this.emailInput).eq(0).should('be.visible').click()
            .type(email, {force: true}).should('have.value', email);
    }

    /**
     * Inserts the password into the password input to login.
     * @param {String} password 
     */
    insertPassword = (password) => {
        cy.log('Introducing password to login');
        cy.get(this.passwordInput).eq(0).should('be.visible').click()
            .type(password, {force: true}).should('have.value', password);
    }

    /**
     * Click the submit button to finish the login proccess.
     */
    clickLoginSubmitButton = () => {
        cy.log('Clicking login submit button.');
        cy.get(this.loginSubmitButton).eq(0).should('be.visible').click();
    }
}
export default new LoginPage();