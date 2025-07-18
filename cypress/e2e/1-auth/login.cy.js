import LoginPage from "../../POM/pages/LoginPage";

const login = new LoginPage();

describe("Login to the System", () =>{
    beforeEach(() => {
        cy.visit('/')
    });

    it("Login with valid credentials", () => {
        login.fillUserName(Cypress.env("username"));
        login.fillPassword(Cypress.env("password"));
        // login.clickSignInBtn();
    })
})