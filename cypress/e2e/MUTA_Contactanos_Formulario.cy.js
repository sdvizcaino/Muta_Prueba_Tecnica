require('cypress-plugin-tab');
import 'cypress-xpath';
import { faker } from '@faker-js/faker'

// Declaracion de variables
let Nombre = faker.person.firstName(); // Libreria de Nombres
let Apellido = faker.person.lastName()
let Email = faker.internet.email() //Libreria para Email
let Telefono =  faker.phone.number({ style: 'national' }) //Libreria de Numeros telefonicos
let Compañia = faker.company.name() // Libreria de Nombres de compañias
let Ciudad = faker.location.city() // Libreria de Ciudades
let Tiempo = 100

describe('Validación de Campos Obligatorios en el Formulario de Contacto', () => {
  beforeEach(() => {
    cy.visit('https://mutaworld.com/contactanos');
    cy.title().should("eq", "Contáctanos – Muta");
    cy.viewport(1280, 720);
  });

  // Función para verificar mensaje de error en un campo
  const verificarMensaje = (selector) => {
    cy.get(selector)
      .should('not.exist');
  };

  it('No mostrar mensajes de error si los campos obligatorios están llenos', () => {
    cy.xpath("//input[contains(@name,'firstname')]").type(Nombre,{delay: Tiempo} )
    cy.xpath("//input[contains(@name,'lastname')]").type(Apellido, {delay: Tiempo})
    cy.xpath("//input[@placeholder='Nombre de la empresa*']").type(Compañia, {delay: Tiempo})
    cy.xpath("//input[contains(@name,'email')]").type(Email,{delay: Tiempo})
    cy.xpath("//input[contains(@name,'phone')]").type(Telefono, {delay: Tiempo})
    cy.xpath("//input[contains(@name,'city')]").type(Ciudad, {delay: Tiempo})
    cy.xpath("//select[contains(@name,'contactreason')]").select("Reciclaje o gestión de residuos")

    verificarMensaje('.hs_firstname > .no-list > li') // Campo Nombre
    verificarMensaje('.hs_lastname > .no-list > li') // Campo Apellido
    verificarMensaje('.hs_0-2\\/name > .no-list > li') // Campo Compañia
    verificarMensaje('.hs_email > .no-list > li') // Campo Email
    verificarMensaje('.hs_phone > .no-list > li') // Campo Telefono
    verificarMensaje('.hs_city > .no-list > li') // Campo Ciudad
    verificarMensaje('.hs_contactreason > .no-list > li') // Campo Motivo Contacto

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
      .should("be.visible")
      .should("have.value", "Enviar")
      .click();

    // Verificar que se muestren los mensajes de error en los campos obligatorios
    verificarMensajeError('.hs_firstname > .no-list > li', "Rellena este campo obligatorio."); 
    verificarMensajeError('.hs_lastname > .no-list > li', "Rellena este campo obligatorio."); 
    verificarMensajeError('.hs_0-2\\/name > .no-list > li', "Rellena este campo obligatorio."); 
    verificarMensajeError('.hs_email > .no-list > li', "Rellena este campo obligatorio."); 
    verificarMensajeError('.hs_phone > .no-list > li', "Rellena este campo obligatorio."); 
    verificarMensajeError('.hs_city > .no-list > li', "Rellena este campo obligatorio."); 
    verificarMensajeError('.hs_contactreason > .no-list > li', "Rellena este campo obligatorio."); 

    // Mensaje de error final que indica campos faltantes
    cy.get('.hs_error_rollup > .no-list > li > .hs-main-font-element')
      .should("be.visible")
      .should("have.text", "Rellena todos los campos obligatorios.");
  });

  it('Debe permitir el envío si el email tiene un formato correcto', () => {
   
    cy.get('input[name="email"]').clear().type(Email);

    // Click en el botón Enviar
    cy.xpath("//input[contains(@type,'submit')]")
      .should("have.value", "Enviar")
      .click();

    // Verificar que no aparezca el mensaje de error
    cy.get('.hs_email > .no-list > li').should('not.exist');
  });

  it('Debe mostrar mensaje de error si el email tiene un formato incorrecto', () => {
    
    cy.xpath("//input[contains(@name,'email')]").type("Incorrect_email.com")

    // Click en el botón Enviar
    cy.xpath("//input[contains(@type,'submit')]")
      .should("have.value", "Enviar")
      .click();

    // Verificar que se muestre el mensaje de error para formato de email incorrecto
    cy.get('.hs_email > .no-list > li')
      .should("be.visible")
      .should("have.text", "La dirección de correo debe tener un formato correcto.");
  });
});