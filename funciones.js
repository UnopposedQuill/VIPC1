
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
    

    var valorRadio = document.getElementById("graficoBarras").checked;
    if (valorRadio) {
        var symbolGenerator = d3.symbol()
            .type(barra)
            .size(function (d) {//Area: X, Densidad: Y
                var number = -1;
                if (d.area === Math.max([d.area, d.densidad])) {
                    number = Math.pow(d.area, 2) + d.area + d.densidad;
                } else {
                    number = Math.pow(d.densidad, 2) + d.area;
                }
                return tamannoFigura * barSizeScale(number);
            });
        svg.selectAll(".figure").attr('d', symbolGenerator);
    } else {
        symbol.size(function (d) {
            return tamanhoFigura * sizeScale(d.densidad);
        });
        path.attr('d', symbol);
    }
    document.getElementById("lblTamanno").innerHTML = tamanhoFigura;

    
}

function mostrar3d(){
    if(mi3d=="off"){
        path.style("fill","url(#gradient)")
        .attr('fill-opacity', 0.9);
        mi3d="on";
    }
    else{
        colorFigura = document.getElementById("CambiadorColor").value;
            path.attr('fill-opacity', 0.4)
            .style("fill", colorFigura);
            mi3d="off";
    }
    
}

//Esta función se llama al cambiar alguno de los botones de radios
function cambiarFigura(self) {
    if (self.id === "graficoBarras") {
        var symbolGenerator = d3.symbol()
            .type(barra)
            .size(function (d) {//Area: X, Densidad: Y
                var number = -1;
                if (d.area === Math.max([d.area, d.densidad])) {
                    number = Math.pow(d.area, 2) + d.area + d.densidad;
                } else {
                    number = Math.pow(d.densidad, 2) + d.area;
                }
                return tamanhoBase * barSizeScale(number);
            });
        svg.selectAll(".figure").attr('d', symbolGenerator);
    } else {
        if(self.id === "figuraBurbujas") {
            symbol.type(d3.symbolCircle);
        } else if (self.id === "figuraRectangulos") {
            symbol.type(rectangulo);
        } else if (self.id === "figuraDiamantes") {
            symbol.type(d3.symbolDiamond);
        } else if (self.id === "graficoBarras") {
            symbol.type(barra);
        }
        path.attr('d', symbol);
    }
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
        var densidad = 0;
        var valorArea = 0;//Area: X, Densidad: Y, Size: Z
        if (size - Math.pow(Math.floor(Math.sqrt(size)),2) < Math.floor(Math.sqrt(size))) {
            densidad = size - Math.pow(Math.floor(Math.sqrt(size)),2);
            valorArea = Math.floor(Math.sqrt(size));
        } else {
            densidad = Math.floor(Math.sqrt(size));
            valorArea = size - Math.pow(Math.floor(Math.sqrt(size)),2) - Math.floor(Math.sqrt(size));
        }
        context.moveTo(-densidad / 2, valorArea)
        context.lineTo( densidad / 2, valorArea)
        context.lineTo( densidad / 2, 0)
        context.lineTo(-densidad / 2, 0)
        context.lineTo(-densidad / 2, valorArea)
    }
}

function transparenciaIN() {
    tip.show;
    path.attr('fill-opacity', 0.4);
}
