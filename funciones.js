
//Algunas funciones auxiliares que necesité
function max(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    return number2;
}

function cambiarColor(self) {
    //Busca el color dentro del componente CambiadorColor y se lo aplica
    //los objetos dentro de la grafica
    colorFigura = self.value;
    path.style('fill', colorFigura);
}

//funcion encargado de cambiar el tamaño a las figuras
function cambioTamanho(self) {

    valorSlider = self.value;
    tamanhoFigura = parseInt(valorSlider);

    //Cambio de tamaño a las Burbujas del grafico
    symbol.size(function (d) {
        return tamanhoFigura * sizeScale(d.densidad);
    });
    path.attr('d', symbol);
    document.getElementById("lblTamanno").innerHTML = tamanhoFigura;
}

function mostrar3d(){
    path.style("fill","url(#gradient)")
    
    .attr('fill-opacity', 0.9);
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
        context.moveTo(-size / 20, -size / 30)
        context.lineTo( size / 20, -size / 30)
        context.lineTo( size / 20,  size / 30)
        context.lineTo(-size / 20,  size / 30)
        context.lineTo(-size / 20, -size / 30)
        context.closePath();
    }
}

//Esta es otra implementación de una nueva figura
var barra = {
    draw: function (context, size) {

    }
}

function transparenciaIN() {
    tip.show;
    path.attr('fill-opacity', 0.4);
}
