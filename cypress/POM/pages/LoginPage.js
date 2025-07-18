class LoginPage {
    elements ={
        userName : () => cy.get('#username'),
        password :() => cy.get('#password'),
        signInBtn : () => cy.get('#login-btn'),
    }


    fillUserName(userName) {
        this.elements.userName().clear();
        this.elements.userName().type(userName);
    }

    fillPassword(password) {
        this.elements.password().clear();
        this.elements.password().type(password);
    }

    clickSignInBtn() {
        this.elements.signInBtn().click();
    }
}

export default LoginPage;