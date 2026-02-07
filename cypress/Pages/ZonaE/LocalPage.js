class LocalPage {
  seleccionarDropDown(label, value) {
    cy.contains("label", label).parent().find('[role="combobox"]').click();

    cy.get('[role="listbox"]').contains('[role="option"]', value).click();
  }

  locales() {
    return cy.get(".mt-4").then(($elements) => {
      return [...$elements].map((el) => el.innerText.trim());
    });
  }
}

export default LocalPage;
