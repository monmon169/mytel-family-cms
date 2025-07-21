class LoginPage {
    elements = {
        userName : () => cy.get('#username'),
        password :() => cy.get('#password'),
        logInBtn : () => cy.get('#login-btn'),
    }

    fillUserName(userName) {
        this.elements.userName().clear();
        this.elements.userName().type(userName);
    }

    fillPassword(password) {
        this.elements.password().clear();
        this.elements.password().type(password);
    }

    clickLoginBtn() {
        this.elements.logInBtn().click();
    }
}

export default LoginPage;