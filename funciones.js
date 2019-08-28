
//Algunas funciones auxiliares que necesit�
function max(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    return number2;
}

//Esta funci�n lo que har� es redibujar el gr�fico seg�n los valores de las variables
function redibujar() {
    console.log("Redibujando");
    if (tipoDibujo === "burbujas") {
        svg.selectAll("circle")
            .data(cantones)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return xScale(d.poblacion);
            })
            .attr("cy", function (d) {
                return yScale(d.area) - 20;
            })
            .attr("r", function (d) {
                return radioBase * radiusScale(d.densidad);
            })
            .attr("class", "figure")
            //Ahora que ya todo est� en su lugar, agrego
            //los tooltips a cada una de las figuras colocadas
            .on("mouseover", tip.show)
            .on("mouseout", tip.hide);
    } else if (tipoDibujo === "rectangulos") {
        svg.selectAll("rect")
            .data(cantones)
            .enter()
            .append("rect")
            .attr("x", function (d) {
                return xScale(d.poblacion) - 5;
            })
            .attr("y", function (d) {
                return yScale(d.area) - 25;
            })
            .attr("width", function (d) {
                return 10;
            })
            .attr("height", function (d) {
                return 5;
            })
            .attr("class", "figure")
            .on("mouseover", tip.show)
            .on("mouseout", tip.hide);
    } else if (tipoDibujo === "glifo") {

    } else {
        console.log("Tipo incorrecto de dibujo");
    }
}

//Cambia el tipo de dibujo a burbujas, y luego llama a redibujar el gr�fico
function burbujas() {
    console.log("Burbujas");
    tipoDibujo = "burbujas";
    svg.selectAll("circle").transition().attr("visibility", "visible");
    svg.selectAll("rect").transition().attr("visibility", "hidden");
    //redibujar();
}

//Cambia el tipo de dibujo a rect�ngulos, y luego llama a redibujar el gr�fico
function rectangulos() {
    console.log("Rect�ngulos");
    tipoDibujo = "rectangulos";
    svg.selectAll("circle").transition().attr("visibility", "hidden");
    svg.selectAll("rect").transition().attr("visibility", "visible");
    //redibujar();
}

//Cambia el tipo de dibujo a glifos, y luego llama a redibujar el gr�fico
function glifos() {
    console.log("Glifos");
    tipoDibujo = "glifos";
    redibujar();
}

