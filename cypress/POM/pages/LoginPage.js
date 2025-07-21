class LoginPage {
    elements ={
        userName : () => cy.get('#username'),
        password :() => cy.get('#password'),
       
    }


    fillUserName(userName) {
        this.elements.userName().clear();
        this.elements.userName().type(userName);
    }

    fillPassword(password) {
        this.elements.password().clear();
        this.elements.password().type(password);
    }

    
}

export default LoginPage;