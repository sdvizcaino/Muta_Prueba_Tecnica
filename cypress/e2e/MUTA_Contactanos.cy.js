require('cypress-plugin-tab');
import 'cypress-xpath';

describe('Validación de Campos Obligatorios en el Formulario de Contacto', () => {
  before(() => {
    cy.visit('https://mutaworld.com/contactanos');
    cy.title().should("eq", "Contáctanos – Muta");
    cy.viewport(1080, 760);
  });

  // Función para verificar mensaje de error en un campo
  const verificarMensajeError = (selector, mensajeEsperado) => {
    cy.get(selector)
      .should("be.visible")
      .should("have.text", mensajeEsperado);
  };

  it('Mostrar mensajes de error si los campos obligatorios están vacíos', () => {
   
    // Click en el botón Enviar
    cy.xpath("//input[contains(@type,'submit')]")
      .should("have.value", "Enviar")
      .click();

    // Verificar que se muestren los mensajes de error en los campos obligatorios
    verificarMensajeError('.hs_firstname > .no-list > li', "Rellena este campo obligatorio."); // Campo Nombre

    verificarMensajeError('.hs_lastname > .no-list > li', "Rellena este campo obligatorio."); // Campo Apellido
    
    verificarMensajeError('.hs_0-2\\/name > .no-list > li', "Rellena este campo obligatorio."); // Campo Nombre Empresa

    verificarMensajeError('.hs_email > .no-list > li', "Rellena este campo obligatorio."); // Campo Correo

    verificarMensajeError('.hs_contactreason > .no-list > li', "Rellena este campo obligatorio."); // Campo Motivo Contacto

    // Verificar mensaje de error final que indica campos faltantes
    cy.get('.hs_error_rollup > .no-list > li > .hs-main-font-element')
      .should("be.visible")
      .should("have.text", "Rellena todos los campos obligatorios.");
  });
});
