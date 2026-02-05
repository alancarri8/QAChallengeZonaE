class Login {
  inputUsername() {
    return cy.get('[data-test="username"]');
  }

  typeUsername(username) {
    this.inputUsername().type(username);
  }

  inputPassword() {
    return cy.get('[data-test="password"]');
  }

  typePassword(password) {
    this.inputPassword().type(password);
  }

  buttonLogin() {
    return cy.get('[data-test="login-button"]');
  }

  clickLogin() {
    this.buttonLogin().click();
  }

  validateURL() {
    return cy.url();
  }
}

export default Login;
