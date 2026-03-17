# Componentes Compartidos

## Objetivo

Esta carpeta agrupa piezas reutilizables que varias secciones necesitan. Se extrajeron para reducir duplicacion y dejar las secciones mas limpias.

## Archivos

### `SectionBackground.jsx`

Funcion:
- aplica el fondo compartido de cada seccion.

Como funciona:
- define el objeto `sectionBackgroundStyle`.
- envuelve el contenido recibido por `children`.

Cambio importante:
- se agrego `overflow: "hidden"`.

Por que:
- los `container mt-5` internos podian colapsar margen hacia afuera.
- eso generaba espacios blancos entre secciones.

Resultado:
- el fondo cubre correctamente la seccion.
- desaparecen los huecos entre bloques.

### `SectionHeading.jsx`

Funcion:
- renderiza el bloque estandar de encabezado.

Props:
- `eyebrow`
- `title`

### `HighlightRow.jsx`

Funcion:
- renderiza una fila con icono y texto destacado.

Props:
- `icon`
- `text`

### `DescriptionBlock.jsx`

Funcion:
- encapsula el parrafo descriptivo en un contenedor consistente.

### `IconRow.jsx`

Funcion:
- renderiza una fila de iconos desde un arreglo.

Props:
- `icons`

### `ButtonRow.jsx`

Funcion:
- renderiza botones desde configuracion.

Props:
- `buttons`

Cada boton espera:
- `label`
- `className`

### `PosterGrid.jsx`

Funcion:
- crea una cuadricula simple de posters.

Props:
- `posters`

Como funciona:
- recorre el arreglo.
- genera una columna Bootstrap por imagen.

## Beneficio de esta capa

Extraer estos componentes permitio:

- centralizar patrones visuales
- corregir layout en un solo punto
- simplificar las secciones principales
- reutilizar estructura sin copiar JSX
