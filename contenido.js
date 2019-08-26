
//Este archivo define cómo se muestra el contenido del gráfico.

/*
Si no coloco la importación de d3 en el html debo colocar esto aquí
para poder usar D3 aquí
*/
//var d3 = require("d3");

//Tengo que colocar las variables del Xlsx suministrado en el repositorio aquí:
//https://es.wikipedia.org/wiki/Anexo:Cantones_de_Costa_Rica_por_población
var cantones = [
    { nombre: "San José", poblacion: 288.054, area: 44.62, densidad: 6445.71 },
    { nombre: "Alajuela", poblacion: 254.886, area: 388.43, densidad: 656.20 },
    { nombre: "Desamparados", poblacion: 208.411, area: 118.26, densidad: 1751.31 },
    { nombre: "San Carlos", poblacion: 163.745, area: 3347.98, densidad: 48.91}];

//Necesito estos 3 arreglos para poder tener los valores máximos de cada uno, así como el valor mínimo
//de las densidades
var poblaciones = [];
var areas = [];
var densidades = [];
for (i = 0; i < cantones.length; i++) {
    poblaciones.push(cantones[i].poblacion);
    areas.push(cantones[i].area);
    densidades.push(cantones[i].densidad);
}
/*
Ahora colocar las dimensiones específicas del svg, que es donde dibujaré todo
SVG significa Scalable Vector Graphics.
*/
//800 de ancho, 500 de alto//, 5 de relleno a los dos lados de cada barra.
var svgWidth = 900, svgHeight = 500;//, barPadding = 5;
//var barWidth = (svgWidth / dataset.length);

//Selecciono el svg
var svg = d3.select('svg')
    //Modifico sus atributos, para definir todos los tamaños.
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Necesito dos escaladores que me permitan escalar los datos en ejecución
//Uno para el eje X y otro para el eje Y
var xScale = d3.scaleLinear()
    .domain([0, d3.max(poblaciones)])//este 50 es para dejar algo de espacio extra
    .range([0, svgWidth-50]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(areas)])
    //Nótese que el rango en Y es alrevez que el rango en X
    .range([svgHeight, 30]);

/*
Ahora necesito un nuevo escalador para evitar que una burbuja sea insignificantemente pequeña, o gigantesca
Para esto declaro una variable que luego multiplicaré con el tamaño base de las burbujas.
Para esto defino una variable que me diga el radio mínimo, el radio máximo, y finalmente el tamaño base.
*/
var multiplicadorMaximo = 2; //Estas dos variables se podrá modificar en ejecución
var tamanhoBase = 15;
var radiusScale = d3.scaleLinear()
    .domain([d3.min(densidades), d3.max(densidades)])
    .range([1,multiplicadorMaximo]);

//Ahora defino los dos ejes
var eje_x = d3.axisBottom()
    .scale(xScale);
var eje_y = d3.axisLeft()
    .scale(yScale);

//Ahora coloco los dos ejes en el svg
svg.append("g")
    /*
    El transform es para transformar la posición del eje
    Esto se define como colocarlo 40 a la derecha, -20 hacia arriba de la
    esquina inferior izquierda
    */
    .attr("transform", "translate(40,-20)")
    .call(eje_y);

//Para el eje x tengo que colocar más abajo del svg
var xAxisTranslate = svgHeight - 20;

svg.append("g")
    .attr("transform", "translate(40, " + xAxisTranslate  +")")
    .call(eje_x);

//Necesito tooltips encima de cada elemento para poder mostrar
//información específica de cada figura.
var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {
        return "<strong>Cantón:</strong> <span style='color:red'>" + d.nombre + "</span>";
        //return "Cantón: " + d;
    });

//Aplico los tooltips
svg.call(tip);

//Ahora finalmente colocar algunos elementos dentro del svg
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
        //return d.densidad;
        return tamanhoBase * radiusScale(d.densidad);
    })
    //.attr("fill", "black")
    .attr("class", "figure")
    //Ahora que ya todo está en su lugar, agrego
    //los tooltips a cada una de las figuras colocadas
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);
