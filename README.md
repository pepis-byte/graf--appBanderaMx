# graf--appBanderaMx

# Desarrollo de la aplicación web – Bandera de México

# Versión final, con 
## Prompts utilizados en ChatGPT

Durante el desarrollo de la aplicación web se utilizaron diferentes prompts en ChatGPT. Cada uno permitie mejorar progresivamente tanto el funcionamiento como la interfaz de la aplicación, hasta obtener la versión final.

----------

## Prompt 1 – Creación inicial de la aplicación

Desarrolla una aplicación web utilizando HTML, CSS y JavaScript que muestre la bandera de México dividida en tres franjas verticales del mismo tamaño: verde, blanco y rojo.

En la franja blanca debe mostrarse el escudo de México mediante una imagen centrada y con un tamaño adecuado.

Agrega controles deslizantes RGB para modificar de manera interactiva los valores R, G y B de las franjas verde y roja. Cada color debe contar con tres controles independientes correspondientes a rojo (R), verde (G) y azul (B), con valores comprendidos entre 0 y 255.

Los cambios realizados en los controles deben reflejarse inmediatamente en la bandera y debe mostrarse numéricamente el valor actual de cada componente RGB.

La franja blanca y el escudo nacional deben permanecer sin modificaciones.

Separa el proyecto en tres archivos:

-   `index.html`
    
-   `style.css`
    
-   `script.js`
    

El diseño debe ser sencillo, ordenado, centrado y adaptable a diferentes tamaños de pantalla.

----------

## Prompt 2 – Restricción de los colores de la bandera

Mejora la aplicación web anterior para evitar que los controles RGB puedan generar colores que no correspondan con las franjas originales de la bandera de México.

Actualmente, al modificar libremente los componentes R, G y B, la franja verde puede convertirse en azul, amarillo, morado u otros colores. Lo mismo puede suceder con la franja roja.

Modifica la lógica de JavaScript para que los controles correspondientes a la franja verde generen solamente diferentes tonalidades de verde, haciendo que el componente verde sea predominante.

Realiza el mismo procedimiento con la franja roja, asegurando que el componente rojo sea predominante y que únicamente puedan obtenerse diferentes tonalidades de rojo.

Mantén los controles RGB y continúa mostrando los valores numéricos seleccionados.

Utiliza como colores iniciales:

-   Verde: `rgb(0, 104, 56)`
    
-   Rojo: `rgb(206, 17, 38)`
    
-   Blanco: `rgb(255, 255, 255)`
    

La franja blanca y el escudo de México deben permanecer sin modificaciones.

----------

## Prompt 3 – Simplificación mediante potenciómetros

Simplifica la interfaz de la aplicación anterior.

En lugar de utilizar tres controles RGB independientes para la franja verde y tres controles para la franja roja, utiliza únicamente un control deslizante o potenciómetro digital para cada color.

La aplicación debe tener:

-   Un potenciómetro para controlar las diferentes tonalidades de verde.
    
-   Un potenciómetro para controlar las diferentes tonalidades de rojo.
    

Cada potenciómetro debe tener valores comprendidos entre 0 y 255.

JavaScript debe encargarse de calcular automáticamente los componentes RGB necesarios para que el primer control produzca únicamente tonalidades verdes y el segundo únicamente tonalidades rojas.

El verde debe partir aproximadamente del valor `rgb(0, 104, 56)` y el rojo del valor `rgb(206, 17, 38)`.

Debajo de cada potenciómetro muestra:

-   El valor de intensidad seleccionado.
    
-   El valor RGB resultante.
    

Los valores deben actualizarse en tiempo real mientras el usuario mueve los controles.

Mantén intactas la franja blanca y la imagen del escudo nacional.

Conserva la separación del proyecto en `index.html`, `style.css` y `script.js`.

----------

## Prompt 4 – Mejoras de la interfaz y versión final

Realiza una versión final de la aplicación web anterior conservando el funcionamiento de los dos potenciómetros: uno para las tonalidades verdes y otro para las tonalidades rojas.

Mejora la interfaz para que la aplicación sea más clara, ordenada y fácil de utilizar.

Conserva la visualización en tiempo real de la intensidad seleccionada y del valor RGB generado por cada potenciómetro.

Agrega un botón llamado **"Restablecer colores"** que permita regresar automáticamente a los valores iniciales de la bandera:

-   Verde: `rgb(0, 104, 56)`
    
-   Rojo: `rgb(206, 17, 38)`
    

Agrega también un pequeño indicador visual que permita observar el color generado por cada potenciómetro y una referencia que indique el cambio entre tonalidades más oscuras y más claras.

Incluye una sección de descripción en la que se explique brevemente que la aplicación utiliza JavaScript para calcular los valores RGB y modificar dinámicamente los colores de la bandera.

Agrega al final de la página una sección para colocar los nombres y números de control de los integrantes del equipo.

Mejora el diseño utilizando CSS con tarjetas, espacios adecuados, bordes redondeados y un diseño responsive para que la aplicación pueda visualizarse correctamente tanto en computadora como en dispositivos con pantallas pequeñas.

No modifiques la franja blanca ni el escudo de México y conserva la estructura tradicional de las tres franjas verticales de la bandera.

----------

## Resultado final

Mediante estos cuatro prompts se realizó un proceso progresivo de desarrollo y mejora de la aplicación web.

La primera versión permitió construir la estructura principal de la bandera y controlar directamente sus componentes RGB. Posteriormente se restringieron los colores para conservar únicamente tonalidades verdes y rojas.

Después, la interfaz fue simplificada reemplazando los seis controles RGB por dos potenciómetros digitales, permitiendo que JavaScript realizara automáticamente el cálculo de los componentes RGB.

Finalmente, se mejoró la presentación y usabilidad de la aplicación mediante elementos adicionales de interfaz, conservando en todo momento la franja blanca y el escudo nacional.
