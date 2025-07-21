import LoginPage from "../../POM/pages/LoginPage";

const Login = new LoginPage()


Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('login is not defined')) {
    return false;
  }
});

describe("Login to the System", () =>{
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/')
    });

    it("Login with valid credentials", () => {
        Login.fillUserName(Cypress.env("username"));
        Login.fillPassword(Cypress.env("password"));
        Login.clickLoginBtn();
    })
})