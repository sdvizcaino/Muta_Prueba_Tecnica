# REPORTE DE BUGS

## BUG001: Botón de Enviar Habilitado con Campos Vacíos

### Reportado por: Sebastian Vizcaino

- **Descripción**: El botón de enviar está habilitado incluso cuando hay campos obligatorios vacíos.
  
- **Pasos para Reproducir**:
  
  1. Navegar a la página de contacto https://mutaworld.com/contactanos.
  2. Llenar algunos de los campos obligatorios con datos válidos.
  3. Dejar el algun campo obligatorio vacio (Ej: Correo Electronico empresarial)
  4. Hacer Click en "Motivo de contacto" y seleccionar alguna de las opciones.
  5. Hacer clic en el botón "Enviar".

- **Resultado Esperado**: El botón debe estar deshabilitado.

- **Resultado Real**: El botón está habilitado.

- **Evidencia**:
  
  - **Imagen**: https://drive.google.com/file/d/123NOSHhD9LEgOmvOHuat8Kscrpj3v_7l/view?usp=sharing
  - **Video**: https://drive.google.com/file/d/1_21reBBayo9s7VkEEz5E6fyqCgd_SL9I/view?usp=sharing
  - **Mochawesome**: https://drive.google.com/file/d/1MYmK3FnbPi2EUDymzwNw80-2c1k8_kDw/view?usp=sharing

- **informacion adicional**:
  - Cypress:        13.15.0                                                                        │
  - Browser:        Chrome 130 (headless)                                                          │
  - Node Version:   v22.7.0 (C:\Program Files\nodejs\node.exe)

- **Prioridad**: Alta