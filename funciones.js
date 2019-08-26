
//Algunas funciones auxiliares que necesité
function max(number1, number2) {
    if (number1 > 1) {
        return number1;
    }
    return number2;
}

//Esta función lo que hará es redibujar el gráfico según los valores de las variables
function redibujar() {
    console.log("Redibujando");
}

//Cambia el tipo de dibujo a burbujas, y luego llama a redibujar el gráfico
function burbujas() {
    console.log("Burbujas");
    redibujar();
}

//Cambia el tipo de dibujo a rectángulos, y luego llama a redibujar el gráfico
function rectangulos() {
    console.log("Rectángulos");
    redibujar();
}

//Cambia el tipo de dibujo a glifos, y luego llama a redibujar el gráfico
function glifos() {
    console.log("Glifos");
    redibujar();
}

