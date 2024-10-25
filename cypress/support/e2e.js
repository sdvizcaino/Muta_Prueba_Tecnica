// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Archivo: cypress/support/e2e.js o cypress/support/index.js

// Ignorar error de React 418 y 423
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignorar errores específicos de React
    if (err.message.includes('Minified React error #418') || 
        err.message.includes('Minified React error #423')) {
      return false; // Prevenir que Cypress falle el test
    }
    // Permitir que Cypress maneje cualquier otro error
    return true;
  });