# Componentes Principales

## Objetivo

Esta carpeta contiene las secciones completas de la pagina organizadas por feature. Cada carpeta agrupa el componente contenedor y, cuando hace falta, sus componentes pequenos relacionados.

## Secciones

### `home/HomeSection.jsx`

Funcion:
- representa la portada principal.

Como funciona:
- usa `SectionBackground` para el fondo compartido.
- usa `SectionHeading` para el encabezado.
- usa `HighlightRow` para la fila con icono y texto.
- usa `DescriptionBlock` para el texto descriptivo.
- usa `ButtonRow` para las acciones.
- usa `PosterGrid` para la fila de posters.

Datos internos:
- `homeStats`
- `homeButtons`
- `homePosters`

### `favorites/FavoritesSection.jsx`

Funcion:
- renderiza la zona de favoritos.

Como funciona:
- usa `SectionBackground` y `SectionHeading`.
- usa `IconRow` para la fila de acciones.
- usa `HighlightRow` para el mensaje destacado.
- usa `FavoritesGrid` para construir la cuadricula.

Datos internos:
- `favoriteIcons`
- `favoriteItems`

### `catalog/CatalogSection.jsx`

Funcion:
- renderiza la seccion de catalogo.

Como funciona:
- usa `SectionBackground`, `SectionHeading`, `HighlightRow` y `DescriptionBlock`.
- usa `CatalogGrid` para pintar las cards del catalogo.

Datos internos:
- `catalogItems`

### `create/CreateSection.jsx`

Funcion:
- renderiza la seccion final.

Como funciona:
- usa `SectionBackground`, `SectionHeading`, `IconRow`, `HighlightRow` y `DescriptionBlock`.
- usa `ImagePairRow` para evitar repetir manualmente las filas de imagenes.

Datos internos:
- `createIcons`
- `createRows`

## Componentes de apoyo

### `favorites/FavoriteCard.jsx`

Funcion:
- representa una tarjeta individual de favoritos.

Props:
- `image`
- `icon`
- `text`

### `favorites/FavoritesGrid.jsx`

Funcion:
- organiza favoritos en filas de 4 columnas.

Como funciona:
- divide el arreglo con `chunkItems`.
- renderiza una fila por grupo.
- usa `FavoriteCard` dentro de cada fila.

### `catalog/CatalogCard.jsx`

Funcion:
- representa una card individual del catalogo.

Props:
- `image`
- `title`
- `text`
- `buttonLabel`

### `catalog/CatalogGrid.jsx`

Funcion:
- organiza el catalogo en filas de 4 cards.

Como funciona:
- divide el arreglo con `chunkItems`.
- renderiza una fila por grupo.
- usa `CatalogCard` para cada item.

### `create/ImagePairRow.jsx`

Funcion:
- renderiza una fila con dos imagenes.

Uso:
- se reutiliza en `CreateSection`.

## Cambio estructural realizado

Antes:
- `Home`, `Favoritas`, `Catalogo` y `Crea` estaban en `Pages` como componentes grandes.

Ahora:
- esas piezas pasaron a `components` como secciones agrupadas por carpeta.
- la composicion general se concentra en `src/Pages/App.jsx`.

Beneficios:
- menos JSX repetido
- responsabilidades mas claras
- mantenimiento mas simple
