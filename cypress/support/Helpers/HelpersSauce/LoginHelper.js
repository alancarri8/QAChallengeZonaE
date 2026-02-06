import LoginPage from "../../../Pages/SauceDemo/LoginPage";
const loginPage = new LoginPage();

class LoginHelper {
  login() {
    const url = Cypress.env("BASE_URL");
    const username = Cypress.env("USERVALIDO");
    const password = Cypress.env("PASSVALIDO");

    cy.visit(url);

    loginPage.typeUsername(username);
    loginPage.typePassword(password);
    loginPage.clickLogin();
  }
}

export default new LoginHelper();
