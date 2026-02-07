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
    return cy.get('[name="login"]');
  }

  typeInputUser(user) {
    this.inputUser().type(user);
  }

  inputPass() {
    return cy.get('[name="password"]');
  }

  typeInputPass(pass) {
    this.inputPass().type(pass);
  }

  buttonIniciarSesion() {
    return cy.contains("button", "Iniciar sesión");
  }

  clickButtonIniciarSesión() {
    this.buttonIniciarSesion().click();
  }

  userButton(username) {
    return cy.contains("button", username);
  }

  validateUserName(username) {
    this.userButton(username)
      .should("be.visible")
      .and("contain.text", username);
  }

  /*
  buttonCrearCuenta() {
    return cy.contains("a", "Crear una cuenta");
  }

  clickButtonCrearCuenta() {
    this.buttonCrearCuenta().invoke("removeAttr", "target").click();
  }
    */
}

export default HomePage;
