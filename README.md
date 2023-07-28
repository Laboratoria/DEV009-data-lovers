# Data Lovers

## Índice

* [1. ¿Qué haré?](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist para solicitar PF](#9-checklist-para-solicitar-pf)

***

## 1. ¿Qué haré?

Página web para visualizar un conjunto (set) de datos: 
- Visualizar la data
- Filtrar la data
- Ordenar la data
- Hacer algún cálculo agregado

La página web se desarrollará teniendo en cuenta la información que se descubra acerca de las preferencias y requerimientos del usuario, de modo que la visualización de los datos se adapte a sus necesidades específicas.

¿Por qué lo haré?
El objetivo principal de este proyecto es aprender a diseñar y construir una interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el usuario necesita.


## 2. ¿Qué entregaré?

El proyecto será entregado subiendo el código a GitHub (commit/push) y la interfaz será desplegada usando GitHub Pages.

Esta es mi interpretación de los criterios mínimos de aceptación:

Definición del producto (1era etapa)
- Documenta: README.md: proceso de diseño y cómo el producto resuelve el problema (o problemas) que tiene tu usuario.
- Historias de usuario: incluir la definición de terminado (definition of done) y los criterios de aceptación para cada una.
- Termina una historia de usuario antes de pasar a la siguiente.
- Diseño de la interfaz de usuario: prototipo de baja fidelidad (papel +fotos), alta fidelidad (ideal), testeos de usabilidad (para iterar, con problemas de usabilidad y sus soluciones - no son lo mismo que las pruebas unitarias).
Implementación (2da etapa)
- Implementación de la Interfaz de Usuario (HTML/CSS/JS): 
- Muestra
- Interactúa
- Responsive (se adapta a los tamaños de pantalla)
- Visual design
Pruebas (3ra etapa)
- Pruebas unitarias que no son lo mismo que los test de usabilidad en prototipos: para las funciones encargadas de procesar, filtrar y ordenar la data, así como calcular estadísticas (cubrir al menos el 70%).


* [Studio Ghibli](src/data/ghibli/ghibli.json).
  Este set es el que será mi data. 
  [Studio Ghibli](https://ghiblicollection.com/).
  - [Investigación con seguidores de las animaciones del Studio Ghibli](src/data/ghibli/README.md)

El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.


## 3. Selección de tema:

Una vez definida el área de interés, buscar entender quién es el usuario y qué necesita saber o ver exactamente

### Seleccioné:
Studio Ghibli

Lo que necesitan usuarias de Ghibli:
Hay un grupo que desea poder interactuar y ver la información de las animaciones y sus personajes. Lo que necesitan las usuarias se reflejan en las historias:

### Historias:

## Historia 1:
Yo, como fanático de Ghibli quiero visualizar la lista de personajes por película. Para analizar los personajes por su película y recordar los que ya he visto pero he olvidado.

## Criterios de aceptación:
Tiene botón para filtrar personajes por películas.
Se aplica correctamente los filtros de orden por película. 
Se realiza un cálculo agregado sobre: 
Cada personaje con ficha que contenga: nombre, edad, género y especie.

## Definición de terminado (se relaciona con la calidad, aplica para el resto de historias de usuarios): 
- El usuario entra cómodamente a la página y se desplaza de manera intuitiva
- El usuario reconoce que la página se trata del Studio Ghibli
- Responsive
- Estilos CSS
- Código en el repositorio
- Código pasa los test
- Historia testeada por 2 usuarios que notaron las mejoras después del testeo de usabilidad.

## Historia 2:	
Yo,  como fanático del cine quiero conocer la lista de películas en Ghibli organizadas según sus directores. Con ficha que contenga el poster de la película y breve descripción. Para saber qué directores han repetido producciones con el Studio Ghibli.

## Historia 3:
Yo, como fanático automotriz, quisiera conocer los vehículos raros en las películas Ghibli, ordenados según su clase. Y en su ficha algún tipo de descripción. Para conocer nuevos vehículos.

## Historia 4: 
Yo, como ilustrador, quisiera conocer las especies raras  en las películas Ghibli, ordenadas según su clase. Y en su ficha algún tipo de descripción. Para analizar cuántas especies hay en las películas del Studio Ghibli.

Más información sobre las historias y sus actividades específicas se encuentran en el siguiente tablero de figma, incluidas las gráficas de los prototipos de alta y baja fidelidad: https://www.figma.com/file/K6QRYN1ZpzO5Uv6NsJXqI6/SCRUM-DATA-LOVERS?type=design&node-id=0-1&mode=design&t=ei5RKGyngPX5lXQY-0


