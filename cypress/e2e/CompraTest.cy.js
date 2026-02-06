import loginHelper from "../support/Helpers/LoginHelper";
import Inventory from "../Pages/Inventario";
import CartBuy from "../Pages/CarroDeCompras";
import Checkout from "../Pages/Checkout";
import CarroDecomprasHelper from "../support/Helpers/CarroDecomprasHelper";

const inventoryPage = new Inventory();
const carroDecompras = new CartBuy();
const checkout = new Checkout();

beforeEach(() => {
  loginHelper.login();
});

describe("Validación de eliminado del producto, y compra de un producto", () => {
  it("Validar que el usuario pueda eliminar un producto del carro de compras", () => {
    inventoryPage.clickAdd();
    inventoryPage.clickIconCart();
    carroDecompras.clickButtonRemove();
    carroDecompras.validarCarroVacio().should("not.exist");
  });

  it("Validar que el cliente pueda finalizar la compra", () => {
    inventoryPage.clickAdd();
    inventoryPage.clickIconCart();
    carroDecompras.clickButtonCheckout();
    CarroDecomprasHelper.completeForm();
    checkout.clickButonFinish();
    checkout
      .validarCompraExitosa()
      .should("have.text", "Thank you for your order!");
  });
});
