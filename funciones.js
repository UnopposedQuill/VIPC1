
//Algunas funciones auxiliares que necesité
function max(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    return number2;
}

//Esta función lo que hará es redibujar el gráfico según los valores de las variables
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
            //Ahora que ya todo está en su lugar, agrego
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

//Cambia el tipo de dibujo a burbujas, y luego llama a redibujar el gráfico
function burbujas() {
    console.log("Burbujas");
    tipoDibujo = "burbujas";
    svg.selectAll("circle").transition().attr("visibility", "visible");
    svg.selectAll("rect").transition().attr("visibility", "hidden");
    svg.selectAll("diamond").transition().attr("visibility", "hidden");
    //redibujar();
}

//Cambia el tipo de dibujo a rectángulos, y luego llama a redibujar el gráfico
function rectangulos() {
    console.log("Rectángulos");
    tipoDibujo = "rectangulos";
    svg.selectAll("circle").transition().attr("visibility", "hidden");
    svg.selectAll("rect").transition().attr("visibility", "visible");
    svg.selectAll("diamond").transition().attr("visibility", "hidden");
    //redibujar();
}

//Cambia el tipo de dibujo a burbujas, y luego llama a redibujar el gráfico
function diamantes() {
    console.log("Diamond");
    tipoDibujo = "Diamond";
    
    svg.selectAll("circle").transition().attr("visibility", "hidden");
    svg.selectAll("rect").transition().attr("visibility", "hidden");
    svg.selectAll("diamond").transition().attr("visibility", "visible");
    //redibujar();
}

//Cambia el tipo de dibujo a glifos, y luego llama a redibujar el gráfico
function glifos() {
    console.log("Glifos");
    tipoDibujo = "glifos";
    redibujar();
}


function cambiarColor() {
    //Busca el color dentro del componente CambiadorColor y se lo aplica
    //los objetos dentro de la grafica
    colorFigura = document.getElementById("CambiadorColor").value;

    

    svg.selectAll("circle").transition().style('fill', colorFigura) ;
    svg.selectAll("rect").transition().style('fill', colorFigura);

    //svg.selectAll("diamond").transition().style('fill', colorFigura);
}
//funcion encargado de cambiar el tamaño a las figuras
function cambioTamanno() {

    tamannoFigura = document.getElementById("tamanhoFigura").value;
    tamannoFigura = parseInt(tamannoFigura) / 5 ;
    //console.log(d.densidad );

    //Cambio de tamaño a las Burbujas del grafico
    svg.selectAll("circle").transition().attr("r", function (d) {
                return tamannoFigura * radiusScale(d.densidad);
            });

    svg.selectAll("rect").transition().attr("width", function (d) {
            return tamannoFigura ;

    } ).attr("height", function (d) {
            return (tamannoFigura) / 2 ;

    } );

    /*svg.selectAll("rect").transition().attr("width", function (d) {
            return tamannoFigura ;

    } ).attr("height", function (d) {
            return tamannoFigura  ;

    } );*/
     document.getElementById("lblTamanno").innerHTML = tamannoFigura;

    /*svg.selectAll("circle")
            .data(cantones)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return xScale(d.poblacion);*/

}

function mostradorBurbujas() {
    tipoDibujo = document.getElementById("figuraBurbujas").value;
    console.log(tipoDibujo);

    svg.selectAll("circle").transition().attr("visibility", "visible");

    svg.selectAll("rect").transition().attr("visibility", "hidden");

}


function mostradorRectangulos() {
    tipoDibujo = document.getElementById("figuraRectangulos").value;
    console.log(tipoDibujo);

    svg.selectAll("rect").transition().attr("visibility", "visible");

    svg.selectAll("circle").transition().attr("visibility", "hidden");
    
}

function mostrarGraficoBarras(){

    // Primero oculta a figura que se esta mostrando
    //svg.selectAll("rect").transition().attr("visibility", "hidden");
    svg.selectAll("circle").transition().attr("visibility", "hidden");

   
    var barChart = svg.selectAll("rect")
        .data(cantones)
        .enter()
        .append("rect")
        .attr("y", function(d) {
             return svgHeight - 5 
        })
        .attr("height", function(d) { 
            return d.area; 
        })
        .attr("width", barWidth - 5)
        .attr("transform", function (d, i) {
            var translate = [barWidth * i, 0]; 
            return "translate("+ translate +")";
        });

} 