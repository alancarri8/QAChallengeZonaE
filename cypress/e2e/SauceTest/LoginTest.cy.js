import loginHelper from "../../support/Helpers/HelpersSauce/LoginHelper";
import LoginPage from "../../Pages/SauceDemo/LoginPage";

const login = new LoginPage();

describe("Validación de login", () => {
  it("Validar que el usuario se pueda loguear correctamente", () => {
    loginHelper.login();
    login.validateURL().should("include", "/inventory.html");
    cy.screenshot();
  });
});
