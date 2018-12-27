describe("Testing the login page", () => {
  it("It should login the user", () => {
    const user = { username: "test", password: "test" };
    cy.visit("/login")
      .getByLabelText(/username/i)
      .type(user.username)
      .getByLabelText(/password/i)
      .type(user.password)
      .getByText(/click to login/i)
      .click()
      .url()
      .should("eq", `${Cypress.config("baseUrl")}/friends/`)
      .window()
      .its("localStorage.API_TOKEN")
      .should("be.a", "string");
  });

  it("It should show an error message for invalid credentials", () => {
    cy.visit("/login")
      .getByText(/click to login/i)
      .click()
      .getByText(/invalid credential/i);
  });
});
