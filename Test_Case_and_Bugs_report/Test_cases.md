# Casos de Prueba Automatizados

## Caso de Prueba 1 (CPA001): Verificación de Campos Obligatorios Llenos
- **Descripción**: Verifica que no se muestren mensajes de error cuando todos los campos obligatorios están completos.

- **Precondiciones**:
  - Acceso a Internet
  - Tener Instalado un Navegador (Edge, Chrome) 

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

- **Precondiciones**:
  - Acceso a Internet
  - Tener Instalado un Navegador (Edge, Chrome)

- **Pasos**:
  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Dejar todos los campos vacíos.
  3. Hacer clic en el botón "Enviar".

- **Resultado Esperado**: 
  - Deben aparecer mensajes de error específicos para cada campo vacío.

## Caso de Prueba 3 (CPA003): Verificación de Formato Correcto del Email
- **Descripción**: Verifica que el formulario permita el envío cuando se ingresa un email con un formato válido.

- **Precondiciones**:
  - Acceso a Internet
  - Tener Instalado un Navegador (Edge, Chrome)

- **Pasos**:
  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Ingresar un email con un formato válido.
  3. Hacer clic en el botón "Enviar".

- **Resultado Esperado**: 
  - No deben aparecer mensajes de error en el campo de email.

## Caso de Prueba 4 (CPA004): Verificación de Formato Incorrecto del Email
- **Descripción**: Verifica que se muestren mensajes de error cuando se ingresa un email con un formato incorrecto.

- **Precondiciones**:
  - Acceso a Internet
  - Tener Instalado un Navegador (Edge, Chrome)

- **Pasos**:
  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Ingresar un email con un formato inválido (Ej: Incorrect_Email.com).
  3. Hacer clic en el botón "Enviar".

- **Resultado Esperado**: 
  - Debe aparecer un mensaje de error indicando que el formato del email es incorrecto.

## Caso de Prueba 5 (CPA005): Comportamiento del Botón de Enviar - Habilitado
- **Descripción**: Verifica que el botón "Enviar" esté habilitado cuando todos los campos estén completos correctamente.

- **Precondiciones**:
  - Acceso a Internet
  - Tener Instalado un Navegador (Edge, Chrome)

- **Pasos**:
  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Llenar todos los campos obligatorios con datos válidos (Nombre,Apellido,Nombre de la Empresa,Correo Electronico empresarial,numero telefonico,ciudad).
  3. Hacer Click en "Motivo de contacto" y seleccionar alguna de las opciones.
  4. Hacer clic en el botón "Enviar".

- **Resultado Esperado**: 
  -  El botón "Enviar" debe estar habilitado cuando todos los campos están llenos.

## Caso de Prueba 6 (CPA006): Comportamiento del Botón de Enviar - Deshabilitado
- **Descripción**: Verifica que el botón "Enviar" esté deshabilitado si algún campo obligatorio está vacío.

- **Precondiciones**:
  - Acceso a Internet
  - Tener Instalado un Navegador (Edge, Chrome)

- **Pasos**:
  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Llenar algunos de los campos obligatorios con datos válidos.
  3. Dejar el algun campo obligatorio vacio (Ej: Correo Electronico empresarial)
  4. Hacer Click en "Motivo de contacto" y seleccionar alguna de las opciones.
  5. Hacer clic en el botón "Enviar".

- **Resultado Esperado**: 
  - El botón debe estar deshabilitado cuando algún campo obligatorio está vacío.

- **Precondiciones**:
  - Acceso a Internet
  - Tener Instalado un Navegador (Edge, Chrome)

## Caso de Prueba 7 (CPA007): Verificacion de guardado de registro de Empresas
- **Descripción**: Verificar que al llenar todos los campos obligatorios el registro se guarda correctamente

- **Precondiciones**:
  - Acceso a Internet
  - Tener Instalado un Navegador (Edge, Chrome)

  1. Navegar a la pagina web https://mutaworld.com/
  2. Dar click en el boton "Iniciar Sesion" en la zona superior derecha
  3. Dar click en la Opcion "Registrame"
  4. Llenar todos los campos obligatorios con datos válidos (Nombre,Apellido,Nombre de la Empresa,Correo Electronico empresarial,numero telefonico,ciudad,).
  5. seleccionar alguna opcion de "Material a Reciclar" (Ej: Ambos)
  6. Dar click en el cuadro de "Acepto los Términos y Condiciones."
  7. Dar click en el cuadro de "Autorizo el tratamiento de mis datos personales de acuerdo con la Política de Privacidad."
  8. Dar click en el cuadro de "He leído y acepto la Política de Tratamiento de Datos Personales."
  9. Dar click en el Boton "Enviar"

- **Resultado Esperado**: 
  - No deben aparecer mensajes de error.
  - Mensaje de confirmacion de proceso completado.