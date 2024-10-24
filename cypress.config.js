const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Directorio donde se guardarán los videos de las pruebas
    videosFolder: 'cypress/evidences/videos',

    // Directorio donde se guardarán las capturas de pantalla
    screenshotsFolder: 'cypress/evidences/screenshots',

    // Habilitar la grabación de videos
    video: true,

    // Guardar capturas de pantalla automáticamente en caso de fallos
    screenshotOnRunFailure: true,

    // Directorio para guardar reportes de ejecución
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/evidences/logs',
      overwrite: false,
      html: true,
      json: true,
    },

    setupNodeEvents(on, config) {
      // Capturar capturas de pantalla y videos en caso de error
      on('after:screenshot', (details) => {
        console.log('Screenshot taken:', details.path);
      });
    },
  },
});

