import HomePage from "../../Pages/ZonaE/HomePage.cy";
import HomeHelper from "../../support/Helpers/HelpersZonaE/HomeHelper";

const homePage = new HomePage();

describe("Inicio de sesión", () => {
  it("Validar que el usuario se pueda loguear correctamente", () => {
    HomeHelper.login();
    homePage.validateUserName("Alan");
  });
});
