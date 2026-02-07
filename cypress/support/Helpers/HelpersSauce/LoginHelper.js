import LoginPage from "../../../Pages/SauceDemo/LoginPage";
const loginPage = new LoginPage();

class LoginHelper {
  login() {
    const url = Cypress.env("BASE_URLZ");
    const username = Cypress.env("USERZ");
    const password = Cypress.env("PASSZ");

    cy.visit(url);

    loginPage.typeUsername(username);
    loginPage.typePassword(password);
    loginPage.clickLogin();
  }
}

export default new LoginHelper();
