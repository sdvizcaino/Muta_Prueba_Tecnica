import { faker } from '@faker-js/faker'
require('cypress-plugin-tab');

// Declaracion de variables
let Nombre = faker.person.firstName(); // Libreria de Nombres
let Apellido = faker.person.lastName()
let Email = faker.internet.email() //Libreria para Email
let Compañia = faker.company.name() // Libreria de Nombres de compañias
let Ciudad = faker.location.city() // Libreria de Ciudades
let Telefono =  3210543876
let Tiempo = 100

describe('Formulario de registro para empresas', () => {
    beforeEach(() => {
        cy.visit('https://app.mutaworld.com/signup');
        cy.title().should("eq", "MUTA Web Generator");
        cy.viewport(1280, 720);
      });

    it('Registro Exitoso al llenar todos los campos obligatorios', () => {
        
        // Llenar todos los campos obligatorios correctamente
        cy.get('#firstname-input')
            .type(Nombre,{delay: Tiempo})

        cy.get('#lastname-input')
            .type(Apellido,{delay: Tiempo})

        cy.get('#company-input')
            .type(Compañia,{delay: Tiempo})

        cy.get('#jobtitle-input')
            .type("Gerente",{delay: Tiempo})

        cy.get('#email-input')
            .type(Email,{delay: Tiempo})

        cy.get('#phone-input')
            .type(Telefono,{delay: Tiempo})

        cy.get('#city-input')
            .type(Ciudad,{delay: Tiempo})
            
        cy.get('#que_desean_reciclar_')
            .should("be.visible")
            .click()

        cy.get('[data-value="Ambos"]')
            .should("be.visible")
            .click()


        cy.get(':nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.get(':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.get('.css-1nuctf6 > .MuiButtonBase-root > .PrivateSwitchBase-input').click()

        // Verificar que el botón "Enviar" esté habilitado
        cy.get('.MuiButton-root')
                .should("be.visible")
                .should("not.be.disabled")
                .click()
                .wait(Tiempo)

        // Verificar Mensaje de Registro completado
        cy.window().then((win) => {
            win.scrollBy(0,-500) //Scroll Arriba
        })

        cy.resaltarCampo('.style_container__2a6BD > .MuiBox-root > .medium-weight')
            .wait(Tiempo);

        cy.get('.style_container__2a6BD > .MuiBox-root > .medium-weight')
            .should("be.visible")
            .wait(Tiempo)
            .should("contain","Registro Exitoso") 
        
    });
});