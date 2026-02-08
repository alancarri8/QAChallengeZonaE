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
  inputUser() {
    return cy.get('input[name="login"]');
  }

  typeInputUser(username) {
    this.inputUser().type(username);
  }

  inputPass() {
    return cy.get('input[name="password"]');
  }

  typeInputPass(password) {
    this.inputPass().type(password);
  }

  buttonIniciarSesion() {
    return cy.contains("button", "Iniciar sesión");
  }

  clickButtonIniciarSesion() {
    this.buttonIniciarSesion().click();
  }

  buttonLocales() {
    return cy.get('.hidden [href="/locales"]');
  }

  clickButtonLocal() {
    this.buttonLocales().click();
  }

  userButton(username) {
    return cy.contains("button", username);
  }

  validateUserName(username) {
    this.userButton(username)
      .should("be.visible")
      .and("contain.text", username);
  }
}

export default HomePage;
