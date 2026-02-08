import HomePage from "../../../Pages/ZonaE/HomePage";
const homePage = new HomePage();

class HomeHelper {
  login() {
    const urlZ = Cypress.env("BASE_URLZ");
    const usernameZ = Cypress.env("USERZ");
    const passwordZ = Cypress.env("PASSZ");

    cy.visit(urlZ);

    homePage.clickButtonIngresar();
    homePage.typeInputUser(usernameZ);
    homePage.typeInputPass(passwordZ);
    homePage.clickButtonIniciarSesion();
  }
}

export default new HomeHelper();
