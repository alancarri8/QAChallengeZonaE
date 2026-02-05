import loginHelper from "../support/Helpers/LoginHelper";
import LoginPage from "../Pages/LoginPage";

const login = new LoginPage();

describe("Validación de login", () => {
  it("Validar que el usuario se pueda loguear correctamente", () => {
    loginHelper.login();
    login.validateURL().should("include", "/inventory.html");
  });
});
