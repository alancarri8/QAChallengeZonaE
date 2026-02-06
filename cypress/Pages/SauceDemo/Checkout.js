class Checkout {
  inputFirstName() {
    return cy.get('[data-test="firstName"]');
  }
  typeFirstname(name) {
    this.inputFirstName().type(name);
  }

  inputLastName() {
    return cy.get('[data-test="lastName"]');
  }

  typeLastname(lastName) {
    this.inputLastName().type(lastName);
  }

  inputZipCode() {
    return cy.get('[data-test="postalCode"]');
  }

  typeZipCode(code) {
    this.inputZipCode().type(code);
  }

  buttonContinue() {
    return cy.get('[data-test="continue"]');
  }

  clickButtonContinue() {
    this.buttonContinue().click();
  }

  buttonFinish() {
    return cy.get('[data-test="finish"]');
  }

  clickButonFinish() {
    this.buttonFinish().click();
  }

  validarCompraExitosa() {
    return cy.get('[data-test="complete-header"]');
  }
}

export default Checkout;
