# Prueba Técnica - MUTA

## Descripción General

Este proyecto automatiza la validación del formulario de contacto y el Registro de Nuevas Empresas en la página web de **MUTA**. Utilizando **Cypress** como herramienta principal, se desarrollaron diversos casos de prueba para garantizar la correcta validación de los campos obligatorios, la verificación del formato del campo de email, el comportamiento del botón de envío, y para el aplicativo web se desarrollo un caso para verificar el guardado del registro.

**Nota**: No se completa el proceso de envío de formularios, siguiendo las indicaciones de no afectar el entorno productivo de MUTA.

## Tecnologías Utilizadas

- **Cypress** - Framework de pruebas automatizadas.
- **cypress-xpath** - Soporte para selectores XPath en Cypress.
- **@faker-js/faker** - Generador de datos dinámicos y realistas para pruebas.
- **cypress-plugin-tab** - Plugin para navegación mediante la tecla `Tab`.
- **Mochawesome** - Generador de reportes de pruebas.

## Configuración del Proyecto

1. Clonar este repositorio y navegar a la carpeta raíz del proyecto.
2. Instalar las dependencias necesarias con el siguiente comando:

   ```bash
   npm install
   ```

3. Ejecutar las pruebas en diferentes navegadores utilizando los siguientes scripts:

   ```bash
   npm run chrome_Muta_FormValidacion  # Ejecutar en Chrome -- Formulario de Contacto
   npm run edge_Muta_FormValidacion    # Ejecutar en Edge -- Formulario de Contacto

   npm run chrome_Muta_RegValidacion  # Ejecutar en Chrome -- Registro de Empresas
   npm run edge_Muta_RegValidacion    # Ejecutar en Edge -- Registro de Empresas
   ```

## Casos de Prueba Implementados

- **Formulario de Contacto**:

   1. Verificación de campos obligatorios llenos.
   2. Verificación de mensajes de error en campos obligatorios vacíos.
   3. Verificación de formato correcto del email.
   4. Verificación de formato incorrecto del email.
   5. Comportamiento del botón de enviar habilitado/deshabilitado.

- **Registro de Nuevas Empresas**:

  1. Verificación de guardado exitoso del registro con datos válidos.

Los detalles y los reportes de pruebas realizados se encuentran en la carpeta Test_Case_and_Bugs_Report.

## Estructura del Proyecto

- **cypress/e2e/MUTA_Contactanos_FormValidacion.cy.js**: Archivo principal con los casos de prueba automatizados para el formulario de Contacto.
- **cypress/e2e/MUTA_RegistroEmp_RegValidacion.cy.js**: Archivo principal el caso de prueba automatizado para el Registro de empresas.
- **cypress/support/commands.js**: Comandos personalizados para las pruebas.
- **cypress/support/e2e.js**: Comando personalizado para ignorar errores de la prueba.
- **cypress/evidences**: Carpeta que contiene capturas de pantalla, videos y logs de las pruebas ejecutadas.
- **cypress.config.js**: Archivo de configuración de Cypress para la ejecución y generación de evidencias.

## Ejecución de Pruebas

1. **Ejecutar Cypress en modo interactivo**:

   ```bash
   npx cypress open
   ```

   - Seleccionar el archivo `MUTA_Contactanos_FormValidacion.cy.js` en la interfaz de Cypress y ejecutar las pruebas.
   - Seleccionar el archivo `MUTA_RegistroEmp_RegValidacion.cy.js` en la interfaz de Cypress y ejecutar las pruebas.

2. **Ejecutar Cypress en modo CLI** (sin interfaz):

   ```bash
   npm run chrome_Muta_FormValidacion  # Ejecutar en Chrome -- Formulario de Contacto
   npm run edge_Muta_FormValidacion    # Ejecutar en Edge -- Formulario de Contacto

   npm run chrome_Muta_RegValidacion  # Ejecutar en Chrome -- Registro de Empresas
   npm run edge_Muta_RegValidacion    # Ejecutar en Edge -- Registro de Empresas
   ```

## Generación de Reportes

Los reportes de las pruebas se generan automáticamente con **Mochawesome** y se almacenan en la carpeta `cypress/evidences/logs`. Puedes revisar los reportes en formato HTML para obtener una vista detallada de los resultados de las pruebas.

## Sugerencias de Mejora

1. **Pruebas de Carga y Estrés**: Realizar pruebas para validar la capacidad del formulario de contacto bajo diferentes niveles de tráfico.
2. **Validaciones Avanzadas de Email**: Implementar validaciones adicionales para el campo de email, verificando caracteres especiales y dominios válidos.
3. **Pruebas de Accesibilidad**: Verificar que la navegación por teclado y la compatibilidad con lectores de pantalla sean adecuadas.

## Autor

Este proyecto fue desarrollado por **Sebastián Vizcaíno**.


