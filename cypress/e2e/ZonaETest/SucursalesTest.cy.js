import HomePage from "../../Pages/ZonaE/HomePage";
import LocalPage from "../../Pages/ZonaE/LocalPage";
const homePage = new HomePage();
const localPage = new LocalPage();

describe("Locales", () => {
  it("Validar que se visualicen correcamente las sucursales", () => {
    const provincia = "Buenos Aires";
    const localidad = "Zona Oeste";
    const sucursalesEsperadas = ["Ciudadela", "José C. Paz", "Merlo", "Moreno"];

    homePage.visitPage();
    homePage.clickButtonLocal();
    localPage.seleccionarDropDown("Provincia", provincia);
    localPage.seleccionarDropDown("Localidad", localidad);
    localPage.locales().then((localesUI) => {
      expect(localesUI).to.deep.equal(sucursalesEsperadas);
    });
  });
});
