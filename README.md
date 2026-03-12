# Music Y A P

Este proyecto fue refactorizado para dejar la pagina principal armada por secciones reutilizables y componentes pequenos.

## Estructura

- `src/Pages/App.jsx`: composicion principal de la interfaz.
- `src/components`: secciones agrupadas por feature y componentes especificos del contenido.
- `src/components/header`: piezas internas del navbar.
- `src/components/shared`: componentes reutilizables entre secciones.

## Documentacion por seccion

- [Pages](./src/Pages/README.md)
- [Componentes principales](./src/components/README.md)
- [Header](./src/components/header/README.md)
- [Componentes compartidos](./src/components/shared/README.md)
- [Kit para ensenar React](./docs/react-para-ensenar/README.md)

## Verificacion

La refactorizacion se valido con `npm run build`.
