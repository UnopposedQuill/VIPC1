
//Algunas funciones auxiliares que necesit�
function max(number1, number2) {
    if (number1 > 1) {
        return number1;
    }
    return number2;
}

//Esta funci�n lo que har� es redibujar el gr�fico seg�n los valores de las variables
function redibujar() {
    console.log("Redibujando");
}

//Cambia el tipo de dibujo a burbujas, y luego llama a redibujar el gr�fico
function burbujas() {
    console.log("Burbujas");
    redibujar();
}

//Cambia el tipo de dibujo a rect�ngulos, y luego llama a redibujar el gr�fico
function rectangulos() {
    console.log("Rect�ngulos");
    redibujar();
}

//Cambia el tipo de dibujo a glifos, y luego llama a redibujar el gr�fico
function glifos() {
    console.log("Glifos");
    redibujar();
}

