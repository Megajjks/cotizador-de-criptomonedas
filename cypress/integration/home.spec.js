/// <reference types="cypress"/>

describe("<Home/>", () => {
  it("<Home/> - Verificar pantalla inicial", () => {
    cy.visit("/");
    //* Probar el texto  del la pantalla iniciar
    cy.contains("Cotiza criptomonedas al instante");
    //* Mejores practicar, agregrar data-cy=nombre de clase
    cy.get("[data-cy=title]")
      .invoke("text")
      .should("equal", "Cotiza criptomonedas al instante");
  });
});
