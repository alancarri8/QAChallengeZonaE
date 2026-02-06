class Inventory {
  buttonAddToCart() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  clickAdd() {
    this.buttonAddToCart().click();
  }

  iconCart() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  clickIconCart() {
    this.iconCart().click();
  }
}

export default Inventory;
