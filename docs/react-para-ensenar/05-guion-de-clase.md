# 05 - Guion De Clase

## Objetivo de la clase

Que ella entienda:

- que es React
- que es un componente
- que son props
- como se compone una interfaz
- que es state
- como se conecta con eventos y render

## Duracion sugerida

Entre 45 y 60 minutos.

## Parte 1: abrir la app mentalmente

Archivo recomendado:
- `src/Pages/App.jsx`

Explicacion:
- "Este archivo es el director de orquesta"
- "No pinta todos los detalles, solo llama piezas"

Pregunta:
- "Ves que la pagina esta dividida en bloques?"

## Parte 2: ensenar un componente

Archivo recomendado:
- `src/components/home/HomeSection.jsx`

Explicacion:
- "Esto ya es una pieza concreta de interfaz"
- "Tambien usa piezas mas pequenas"

Pregunta:
- "Que partes repetidas ves aqui?"

## Parte 3: ensenar props

Archivo recomendado:
- `src/components/shared/SectionHeading.jsx`

Explicacion:
- "Este componente no sabe que texto va a mostrar hasta que alguien se lo pase"

Frase util:
- "Props son parametros para una pieza visual"

## Parte 4: ensenar reutilizacion

Archivos recomendados:
- `src/components/favorites/FavoritesGrid.jsx`
- `src/components/favorites/FavoriteCard.jsx`

Explicacion:
- "Una pieza organiza"
- "Otra pieza representa un item"

Pregunta:
- "Que ventaja tiene esto frente a copiar 8 veces el mismo bloque?"

## Parte 5: introducir state

No hace falta modificar el proyecto completo. Puedes explicarlo con un ejemplo mini:

```jsx
const [abierto, setAbierto] = useState(false);
```

Explicacion:
- "Cuando cambia `abierto`, React dibuja otra vez lo necesario"

## Analogias rapidas

React:
- una maqueta por piezas

Componente:
- una pieza de mueble

Props:
- la etiqueta que le pones a esa pieza

State:
- la memoria interna de la pieza

Render:
- volver a dibujar la pieza en pantalla

## Mini evaluacion final

Hazle estas preguntas:

1. Que diferencia hay entre HTML y JSX?
2. Que diferencia hay entre props y state?
3. Que hace un componente padre?
4. Que hace un componente hijo?
5. Que pasa cuando cambia el state?

## Reto corto para practicar

Pidele que invente un componente llamado `TarjetaPerfil` con estas props:

- `nombre`
- `edad`
- `foto`

Y luego preguntale:

- que JSX deberia devolver?
- que parte seria fija?
- que parte cambiaria por props?

## Cierre ideal

Si al final puede explicar esto con sus palabras, ya entendio la base:

```text
React construye interfaces usando componentes.
Los componentes reciben props.
Algunos componentes tienen state.
Los eventos cambian state.
Cuando cambia state, React renderiza de nuevo.
```
