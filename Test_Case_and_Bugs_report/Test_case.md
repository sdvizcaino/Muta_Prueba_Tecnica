# Casos de Prueba Automatizados

## Caso de Prueba 1 (CPA001): Verificación de Campos Obligatorios Llenos
- **Descripción**: Verifica que no se muestren mensajes de error cuando todos los campos obligatorios están completos.

- **Pasos**:
  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Llenar todos los campos obligatorios con datos válidos (Nombre,Apellido,Nombre de la Empresa,Correo Electronico empresarial,numero telefonico,ciudad).
  3. Hacer Click en "Motivo de contacto" y seleccionar alguna de las opciones.
  4. Hacer clic en el botón "Enviar".
   
- **Resultado Esperado**: 
    - No deben aparecer mensajes de error.
    - Mensaje de confirmacion de proceso completado.

## Caso de Prueba 2 (CPA002): Verificación de Campos Obligatorios Vacíos
- **Descripción**: Verifica que se muestren mensajes de error en los campos obligatorios cuando están vacíos.

- **Pasos**:
  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Dejar todos los campos vacíos.
  3. Hacer clic en el botón "Enviar".

- **Resultado Esperado**: 
  - Deben aparecer mensajes de error específicos para cada campo vacío.

## Caso de Prueba 3 (CPA003): Verificación de Formato Correcto del Email
- **Descripción**: Verifica que el formulario permita el envío cuando se ingresa un email con un formato válido.

- **Pasos**:
  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Ingresar un email con un formato válido.
  3. Hacer clic en el botón "Enviar".

- **Resultado Esperado**: 
  - No deben aparecer mensajes de error en el campo de email.

## Caso de Prueba 4 (CPA004): Verificación de Formato Incorrecto del Email
- **Descripción**: Verifica que se muestren mensajes de error cuando se ingresa un email con un formato incorrecto.

- **Pasos**:
  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Ingresar un email con un formato inválido (Ej: Incorrect_Email.com).
  3. Hacer clic en el botón "Enviar".

- **Resultado Esperado**: 
  - Debe aparecer un mensaje de error indicando que el formato del email es incorrecto.

## Caso de Prueba 5 (CPA005): Comportamiento del Botón de Enviar - Habilitado
- **Descripción**: Verifica que el botón "Enviar" esté habilitado cuando todos los campos estén completos correctamente.

- **Pasos**:
  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Llenar todos los campos obligatorios con datos válidos (Nombre,Apellido,Nombre de la Empresa,Correo Electronico empresarial,numero telefonico,ciudad).
  3. Hacer Click en "Motivo de contacto" y seleccionar alguna de las opciones.
  4. Hacer clic en el botón "Enviar".

- **Resultado Esperado**: 
  -  El botón "Enviar" debe estar habilitado cuando todos los campos están llenos.

## Caso de Prueba 6 (CPA005): Comportamiento del Botón de Enviar - Deshabilitado
- **Descripción**: Verifica que el botón "Enviar" esté deshabilitado si algún campo obligatorio está vacío.

  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Llenar algunos de los campos obligatorios con datos válidos (Nombre,Apellido,Nombre de la Empresa,numero telefonico,ciudad).
  3. Dejar el campo Correo Electronico empresarial vacio
  4. Hacer Click en "Motivo de contacto" y seleccionar alguna de las opciones.
  5. Hacer clic en el botón "Enviar".

- **Resultado Esperado**: El botón debe estar deshabilitado cuando algún campo obligatorio está vacío.