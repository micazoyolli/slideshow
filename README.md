# Slideshow JS
Slideshow con texto personalizable adaptable a todos los dispositivos.

![Slideshow Responsive](https://github.com/micazoyolli/slideshow/blob/master/img/screenshot.png)

## Demo
[Slideshow JS Demo](https://micazoyolli.github.io/slideshow/)

## Setup

### Descarga de GitHub

Descarga directamente el plugin directo [aquí](https://github.com/micazoyolli/slideshow/archive/master.zip)

### Incluye archivos CSS y JS

Primero que nada agrega main.css entre las etiquetas `<head>` de tu documento.

```html
<head>
  <link rel="stylesheet" href="css/main.css">
</head>
```

Después incluye `main.js` en tu documento.

```html
<body>
  ...
  <script src="js/main.js"></script>
</body>
```

### Markup

Agrega el siguiente snippet de HTML al cuerpo de tu página web.

```html
<div id="slide" class="row">
  <ul>
    <li>
      <img src="img/slide/slide01.jpg">
      <div class="caption">
        <h1>No man, I don't eat pork</h1>
        <h3>My money's in that office, right?</h3>
      </div>
    </li>
    <li>
      <img src="img/slide/slide02.jpg">
      <div class="caption">
        <h1>I'm serious as a heart attack</h1>
        <h3>Normally, both your asses would be dead as fucking fried chicken</h3>
      </div>
    </li>
    <li>
      <img src="img/slide/slide03.jpg">
      <div class="caption">
        <h1>Is she dead, yes or no?</h1>
        <h3>I've already been through too much shit this morning</h3>
      </div>
    </li>
  </ul>

  <ol id="pagination">
    <li item="1"><span class="fa fa-circle"></span></li>
    <li item="2"><span class="fa fa-circle"></span></li>
    <li item="3"><span class="fa fa-circle"></span></li>
  </ol>

  <div class="arrows" id="back"><span class="fa fa-chevron-left"></span></div>
  <div class="arrows" id="next"><span class="fa fa-chevron-right"></span></div>
</div>
```

El número de `<li>` dentro de los `<ul>` debe corresponder al mismo que se encuentre en la paginación `<ol>`.

### Animation

Slideshow puede tener dos tipos de animación (slide y fade), el cual podrá configurarse directamente en el `main.js` con solo cambiar la propiedad `animation`.

```html
var p = {
  animation: 'slide'
};
```
