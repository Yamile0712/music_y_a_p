# Pages

## Objetivo

Esta carpeta ahora solo contiene la composicion principal de la app. La logica visual grande dejo de vivir aqui y se movio a `src/components`.

## `App.jsx`

### Que hace

Arma la pagina completa en el orden final visible:

1. `Header`
2. `HomeSection`
3. `FavoritesSection`
4. `CatalogSection`
5. `CreateSection`

### Como funciona

`App.jsx` no define detalle visual interno. Su responsabilidad es solamente coordinar el ensamblado de la interfaz importando secciones ya separadas.

### Por que se dejo asi

Antes, `Pages` tenia varios archivos grandes con mucho JSX repetido.

Despues de la refactorizacion:

- `Pages` queda limpia.
- el orden general de la pagina se entiende rapido.
- mover, quitar o agregar secciones requiere tocar un solo archivo.
