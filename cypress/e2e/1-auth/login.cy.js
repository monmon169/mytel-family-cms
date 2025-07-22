import LoginPage from "../../POM/pages/LoginPage";
import CarManageMentPage from "../../POM/pages/CarManageMentPage";

const Login = new LoginPage()
const CarManageMent = new CarManageMentPage();


Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('login is not defined')) {
    return false;
  }
});

describe("Login to the System", () =>{
    describe('Login to the System via Keycloak', () => {
  beforeEach(() => {
    cy.session('Keycloak-session', () => {
      cy.visit('/');

      cy.origin('https://iam.toprate.io', { args: { username: Cypress.env('username'), password: Cypress.env('password') } }, ({ username, password }) => {
        cy.get('input#username').type(username);
        cy.get('input#password').type(password);
        cy.get('button[type="submit"], input[type="submit"]').click();
      });

      cy.url().should('include', '/'); // or /car/car-management
    });
  });

  it('should show dashboard page', () => {
    cy.contains('Car Management').should('be.visible'); // adjust if needed
  });
});

})