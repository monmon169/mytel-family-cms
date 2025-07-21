import LoginPage from "../../POM/pages/LoginPage";
import LogoutPage from "../../POM/pages/LogoutPage";

const login = new LoginPage();
const logOut = new LogoutPage();
describe("Login to the System", () =>{
    beforeEach(() => {
        cy.visit('/')
    });

    it("Login with valid credentials", () => {
        login.fillUserName(Cypress.env("username"));
        login.fillPassword(Cypress.env("password"));
        logOut.clickSignInBtn();
    })
})