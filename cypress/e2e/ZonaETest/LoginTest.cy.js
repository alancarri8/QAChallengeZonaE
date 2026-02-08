import HomePage from "../../Pages/ZonaE/HomePage";
import HomeHelper from "../../support/Helpers/HelpersZonaE/HomeHelper";

const homePage = new HomePage();

describe("Inicio de sesión", () => {
  it("Validar que el usuario se pueda loguear correctamente", () => {
    const usuarioLogueado = "Alan";

    HomeHelper.login();
    homePage.validateUserName(usuarioLogueado);
    cy.screenshot();
  });
});
