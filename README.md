### Descripción del Proyecto

#### **Proyecto: Automatización de Pruebas para la Validación del Formulario de Contacto en MUTA**
Este proyecto utiliza **Cypress** como herramienta de automatización de pruebas para validar los campos obligatorios en el formulario de contacto de la página web de MUTA. El objetivo principal es verificar que los mensajes de error se desplieguen correctamente cuando los campos están vacíos o presentan información inválida, asegurando que los datos ingresados cumplan con los requisitos de validación.

#### **Requisitos Previos**
1. Node.js instalado.
2. Cypress instalado como dependencia del proyecto.
3. Adicionalmente, se utilizan los siguientes plugins:
   - `cypress-xpath`: Para facilitar la selección de elementos en el DOM mediante expresiones XPath.
   - `cypress-plugin-tab`: Permite la navegación entre los campos usando la tecla "tab".
   - `faker`: Generador de datos aleatorios (nombres, emails, ciudades, etc.) para simular entradas de usuario válidas y probar los campos del formulario.

#### **Configuración del Proyecto**
1. Clona el repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias del proyecto.
3. Inicia Cypress con el comando `npx cypress open` para abrir la interfaz visual de Cypress y seleccionar las pruebas que deseas ejecutar.

#### **Estructura de las Pruebas**
Las pruebas están organizadas en un archivo **`cypress/e2e/formValidation.cy.js`**, donde se incluyen tres tipos de pruebas principales:

1. **Prueba de llenado exitoso de campos obligatorios:**
   - Verifica que no se muestren mensajes de error cuando los campos obligatorios están correctamente llenos.
   - Utiliza la librería `faker` para generar datos válidos, como nombres, apellidos, correos electrónicos y teléfonos.

   ```javascript
   it('No mostrar mensajes de error si los campos obligatorios están llenos', () => {
       // Llenado de los campos
       // Verificación de la inexistencia de mensajes de error
   });
   ```

2. **Prueba de validación de campos vacíos:**
   - Comprueba que se desplieguen los mensajes de error cuando los campos obligatorios están vacíos.
   - Utiliza una función auxiliar para verificar los mensajes de error de cada campo.

   ```javascript
   it('Mostrar mensajes de error si los campos obligatorios están vacíos', () => {
       // Simulación de envío del formulario vacío
       // Verificación de los mensajes de error en cada campo
   });
   ```

3. **Validación de formato de email:**
   - Verifica tanto si el campo de correo electrónico acepta un formato correcto como si rechaza uno incorrecto.
   
   ```javascript
   it('Debe mostrar mensaje de error si el email tiene un formato incorrecto', () => {
       // Simulación de email incorrecto y verificación de mensaje de error
   });
   ```

#### **Descripción del Código**
- **Faker.js:** Se utiliza para generar entradas dinámicas y válidas para los campos de nombre, apellido, email, teléfono, compañía y ciudad.
  
  ```javascript
  let Nombre = faker.person.firstName();
  let Apellido = faker.person.lastName();
  let Email = faker.internet.email();
  ```

- **Cypress Xpath:** Facilita la selección de elementos en el DOM a través de expresiones XPath, lo cual es útil cuando los selectores CSS tradicionales no son suficientes.
  
  ```javascript
  cy.xpath("//input[contains(@name,'firstname')]").type(Nombre);
  ```

- **Validación de mensajes de error:** Se verifican los mensajes de error para cada campo obligatorio cuando están vacíos, y se asegura que no aparezcan mensajes de error si los campos están completos.
  
  ```javascript
  const verificarMensaje = (selector) => {
    cy.get(selector).should('not.exist');
  };
  ```

- **Validación de formatos:** Especial atención se le da al campo de email, asegurándose de que el sistema muestre mensajes de error si se ingresa un formato incorrecto.

  ```javascript
  it('Debe mostrar mensaje de error si el email tiene un formato incorrecto', () => {
      cy.xpath("//input[contains(@name,'email')]").type("Incorrect_email.com");
      // Verificación del mensaje de error
  });
  ```

#### **Mejoras Propuestas**
1. **Cobertura de Pruebas:** Se podría incluir la validación de campos opcionales o la interacción con otros formularios en la página para asegurar mayor cobertura.
2. **Accesibilidad:** Agregar pruebas que validen la navegación del formulario utilizando el teclado (tabulación entre campos).
3. **Validaciones adicionales:** Implementar más pruebas para verificar el comportamiento de la aplicación con diferentes idiomas y configuraciones regionales.


