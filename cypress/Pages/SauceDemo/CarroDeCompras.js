class CartBuy {
  buttonCheckOut() {
    return cy.get('[data-test="checkout"]');
  }

  clickButtonCheckout() {
    this.buttonCheckOut().click();
  }

  buttonRemove() {
    return cy.get('[data-test="remove-sauce-labs-backpack"]');
  }

  clickButtonRemove() {
    this.buttonRemove().click();
  }

  validarCarroVacio() {
    return cy.get('[data-test="inventory-item"]');
  }
}

export default CartBuy;
