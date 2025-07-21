class LogoutPage {
    elements = {
        signInBtn :() => cy.get('#login-btn'),
    }

    clickSignInBtn() {
        this.elements.signInBtn().click();
    }
}

export default LogoutPage;