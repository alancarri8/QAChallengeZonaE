class HomePage {
  visitPage() {
    cy.visit("https://www.ze.com.ar/");
  }

  buttonIngresar() {
    return cy.get('.hidden [href="/login"]');
  }

  clickButtonIngresar() {
    this.buttonIngresar().click();
  }

  buttonLocales() {
    return cy.get('.hidden [href="/locales"]');
  }

  clickButtonLocal() {
    this.buttonLocales().click();
  }
}

export default HomePage;
