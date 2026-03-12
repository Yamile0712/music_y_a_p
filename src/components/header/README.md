# Header

## Objetivo

La idea de esta carpeta fue separar el navbar en piezas pequenas para evitar que `Header.jsx` concentrara toda la navegacion y las acciones del usuario en un solo archivo.

## Archivos

### `Header.jsx`

Funcion:
- define la estructura base del navbar con Bootstrap.

Como funciona:
- renderiza `HeaderNav`.
- renderiza `HeaderActions`.

Responsabilidad:
- coordinar el layout general del header.

### `HeaderNav.jsx`

Funcion:
- renderiza los enlaces principales del navbar.

Como funciona:
- define un arreglo `navItems`.
- recorre ese arreglo con `map`.
- crea los `li` y `a` correspondientes.

Beneficio:
- agregar o editar links es mas simple y no requiere duplicar JSX.

### `HeaderActions.jsx`

Funcion:
- renderiza la zona derecha del navbar.

Incluye:
- buscador
- iconos
- dropdown

Como funciona:
- define `dropdownItems`.
- genera parte del menu a partir de ese arreglo.

Beneficio:
- las acciones del header quedan separadas de la navegacion principal.
