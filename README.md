# Cardify Reloaded
***

¿Qué es? Es un plugin de jQuery que toma a las imagenes dentro de un contenedor con clase  _cardify_  y las reemplaza por un nuevo
elemento `<figure>` que contenga la imagen `<img>` además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

***
## Elaborado con:
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)

***

## Instalación
1. Agrega Jquery a tu proyecto

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>`


2. Agrega la clase "cardify" a tus contenedor

```html
<div class="cardify">
    <img src="ruta_a_tu_imagen" alt="titulo_de_la_imagen">
    <img src="ruta_a_tu_imagen" alt="titulo_de_la_imagen">
    <img src="ruta_a_tu_imagen" alt="titulo_de_la_imagen">
</div>
```

3. Descarga el archivo cardify.js y vincúlalo con tu html con la siguiente liga:
`<script src="node_modules/cardify_reloaded/lib/index.js"></script>`

4. Llama a la biblioteca con:

```js
$('.cardify').cardify();
```

5. Puedes modificar los estilos utilizando las clases "principal" para la etiqueta &lt;figure&gt; e "imgTitle" para la etiqueta &lt;figcaption&gt;.

[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)

Belén y Elvia

[![forthebadge](https://forthebadge.com/images/badges/winter-is-coming.svg)](https://forthebadge.com)

