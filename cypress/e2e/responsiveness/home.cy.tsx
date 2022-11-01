describe("Home Responsiveness", () => {
  describe("Mobile", () => {
    it("Should render the header without buttons on mobile viewport", () => {
      cy.viewport(600, 1000);
      cy.visit("/");
      cy.get('[data-test-id="button-container"]').should(
        "have.css",
        "display",
        "none"
      );
    });
  });

  describe("Tablet", () => {
    it("Should render the header with buttons on tablet viewport", () => {
      cy.viewport(800, 1000);
      cy.visit("/");
      cy.get('[data-test-id="button-container"]').should(
        "not.have.css",
        "display",
        "none"
      );
    });
  });
});
