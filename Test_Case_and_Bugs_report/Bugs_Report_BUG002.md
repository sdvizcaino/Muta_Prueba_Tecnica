# REPORTE DE BUGS

## BUG002: Error al Intentar Registrar Empresa en la Página de MUTA

### Reportado por: Sebastian Vizcaino

- **Descripción**: Al intentar completar el registro de una nueva empresa llenando todos los campos obligatorios correctamente, el sistema devuelve un mensaje de error y no permite finalizar el registro

- **Precondiciones**:
  - Acceso a Internet
  - Tener Instalado un Navegador (Edge, Chrome)

- **Pasos para Reproducir**:
  
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

- **Resultado Real**: 
    - Aparece el siguiente mensaje de error al intentar completar el registro: "Lo sentimos, hubo un error al intentar crear la cuenta. Por favor, intente más tarde."

- **Evidencia**:
  
  - **Imagen**: https://drive.google.com/file/d/1Sq9wQ_HDIMDRY35pfvImks20doixOCYn/view?usp=sharing
  - **Video**: https://drive.google.com/file/d/1VCE9etqFlHryZYy0n4pOEjlfXoFiBvQd/view?usp=sharing
  - **Reporte de prueba**: https://drive.google.com/file/d/172z6OXvMCYDBlHzSKLSBs3dT__79rp4O/view?usp=sharing

- **informacion adicional**:
  - Cypress:        13.15.0 
  - Browser:        Chrome Ver 130
  - ID Caso de Prueba:  CPA007

- **Prioridad**: Alta