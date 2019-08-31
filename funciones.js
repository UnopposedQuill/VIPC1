
//Algunas funciones auxiliares que necesité
function max(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    return number2;
}

function cambiarColor() {
    //Busca el color dentro del componente CambiadorColor y se lo aplica
    //los objetos dentro de la grafica
    colorFigura = document.getElementById("CambiadorColor").value;

    svg.selectAll("path").transition().style('fill', colorFigura) ;
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

//Esta función se llama al cambiar alguno de los botones de radios
function cambiarFigura(self) {
    if (self.id === "figuraBurbujas") {
        symbol.type(d3.symbolCircle);
    } else if (self.id === "figuraRectangulos") {
        symbol.type(rectangulo);
    } else if (self.id === "figuraDiamantes") {
        symbol.type(d3.symbolDiamond);
    }
    path.attr('d', symbol);
}

//Esta es una implementación de una nueva figura
var rectangulo = {
    draw: function (context, size) {
        context.moveTo(-size / 24, -size / 12)
        context.lineTo( size / 24, -size / 12)
        context.lineTo( size / 24,  size / 12)
        context.lineTo(-size / 24,  size / 12)
        context.lineTo(-size / 24, -size / 12)
        context.closePath();
    }
}
