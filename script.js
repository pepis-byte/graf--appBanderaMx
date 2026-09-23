// ==========================================
// BANDERA DE MÉXICO
// CONTROL DE TONOS VERDE Y ROJO
// ==========================================


// ------------------------------------------
// OBTENER ELEMENTOS DEL HTML
// ------------------------------------------

// Franjas de la bandera
const zonaVerde = document.getElementById("zonaVerde");
const zonaRoja = document.getElementById("zonaRoja");


// Potenciómetros
const potVerde = document.getElementById("potVerde");
const potRojo = document.getElementById("potRojo");


// Valores mostrados
const valorVerde = document.getElementById("valorVerde");
const valorRojo = document.getElementById("valorRojo");


// Valores RGB mostrados
const rgbVerde = document.getElementById("rgbVerde");
const rgbRojo = document.getElementById("rgbRojo");


// ==========================================
// ACTUALIZAR COLOR VERDE
// ==========================================

function actualizarVerde() {

    // Obtener valor del potenciómetro
    const intensidad = Number(potVerde.value);


    // Calcular componentes RGB
    // manteniendo una tonalidad verde

    const r = 0;

    const g = intensidad;

    const b = Math.round(intensidad * 0.54);


    // Crear color RGB

    const color =
        `rgb(${r}, ${g}, ${b})`;


    // Aplicar color a la bandera

    zonaVerde.style.backgroundColor = color;


    // Mostrar intensidad

    valorVerde.textContent = intensidad;


    // Mostrar RGB

    rgbVerde.textContent = color;
}


// ==========================================
// ACTUALIZAR COLOR ROJO
// ==========================================

function actualizarRojo() {

    // Obtener valor del potenciómetro

    const intensidad = Number(potRojo.value);


    // Calcular componentes RGB
    // manteniendo una tonalidad roja

    const r = intensidad;

    const g = Math.round(intensidad * 0.08);

    const b = Math.round(intensidad * 0.18);


    // Crear color RGB

    const color =
        `rgb(${r}, ${g}, ${b})`;


    // Aplicar color a la bandera

    zonaRoja.style.backgroundColor = color;


    // Mostrar intensidad

    valorRojo.textContent = intensidad;


    // Mostrar RGB

    rgbRojo.textContent = color;
}


// ==========================================
// EVENTOS
// ==========================================

// Cuando se mueve el potenciómetro verde

potVerde.addEventListener(
    "input",
    actualizarVerde
);

//comentario1
// Cuando se mueve el potenciómetro rojo

potRojo.addEventListener(
    "input",
    actualizarRojo
);


// ==========================================
// COLORES INICIALES
// ==========================================

actualizarVerde();

actualizarRojo();