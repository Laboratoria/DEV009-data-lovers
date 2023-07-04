# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Herramientas](#3-herramientas)
* [4. Historias de usuario](#4-historias-de-usuario)
* [5. Prototipos](#5-prototipos)
* [6. Resultado](#6-resultado)

***

## 1. Preámbulo

El objetivo del proyecto fue crear una pagina web para visualizar un conjunto de datos segun la necesidad del usuario. En esta pagina se puede visualizar, filtrar, ordenar y la data de las peliculas de Studio Ghibli asi como visualizar un calculo agregado para mostrar información aun mas relevante para los usuarios.

![pokemon-data-to-ui](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

## 2. Resumen del proyecto

Como bien mencionamos, la tematica elegida fue Studio Ghibli y para saber qué y como tuvimos que tener un estudio de usuario, en el que descubrimos los siguientes datos:

1.- Los principlaes usuarios del producto son personas

2.- Los objetivos de los usuarios en relacion con el producto son saber cuantas y cuales son las peliculas lanzadas por Studio Ghibli, su fecha de lanzamiento, director, sinopsis y el score dado a cada una.

3.-Los usuarios utilizarían nuestro producto para consultar las peliculas creadas, 


## 3. Herramientas

Los lenguajes utilizados fueron HTML semántico, CSS y JavaScript Vanilla. Se crearon e implementaron test unitarios y se utilizo flexbox y media querys.

## 4. Historias de Usuario

#### Historia de usabilidad 1
[user story 1](src/img/User%20Story%201.png)
#### Historia de usabilidad 2
[user story 1](src/img/User%20Story%202.png)
#### Historia de usabilidad 3

#### Historia de usabilidad 4

## 5. Prototipos


#### Prototipo de baja fidelidad
[user story 1](src/img/prototipo%20en%20papel.png)

#### Prototipos de alta fidelidad
[prototipo alta 1](src/img/prototipo%20alta%20version%201.png)

Hicimos test de usabilidad recibiendo como feedback los siguiente.
Usuario 1 : No encontro el boton de ordenar, deberia haber un boton para resetear la busqueda, no deberian ocultarse los filtros, si habia posibilidad de que viera un pop up al darle click a una pelicula o a la imagen o que diera mas informacion(hacker edition),

Uusario: No encontró botón de ordenado, demoró 1 minuto , hacerlo más vistoso o ponerlo del lado de los filtros, botón de reset ,

Se llegó a las siguientes conclusiones

1.Hacer ORDER vistoso o de lado izquierdo.
2.Boton de limpiar información (filtros y de ordenado).
3.Considerar hacer una lista desplegable para que solo elijan 1 filtro.
4.El checkbox para el hacker edition.
Por lo que el prototipo de alta fidelidad se modifico de la siguiente manera.
[prototitpo alta 2](src/img/prototipo%20alta%20v2.png)

Se realizo también la versión mobile, considerando una lista desplegable donde se puedan seleccionar los filtros y el orderby.
[mobile 1](src/img/version%20mobile.png)

[mobile 2](src/img/mobile%20v2.png)

Usamos para el diseño de ambos protipos[Figma](https://www.figma.com/) 

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Resultado

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

