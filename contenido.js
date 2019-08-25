
//Este archivo define cómo se muestra el contenido del gráfico.

/*
Si no coloco la importación de d3 en el html debo colocar esto aquí
para poder usar D3 aquí
*/
//var d3 = require("d3");

//Tengo que colocar las variables del Xlsx suministrado en el repositorio aquí:
//https://es.wikipedia.org/wiki/Anexo:Cantones_de_Costa_Rica_por_población
var poblaciones = [5, 10];
var areas = [10, 15];
var densidades = [];

/*
Ahora colocar las dimensiones específicas del svg, que es donde dibujaré todo
SVG significa Scalable Vector Graphics.
*/
//500 de ancho, 300 de alto, 5 de relleno a los dos lados de cada barra.
var svgWidth = 800, svgHeight = 400, barPadding = 5;
//var barWidth = (svgWidth / dataset.length);

//Selecciono el svg
var svg = d3.select('svg')
    //Modifico sus atributos, para definir todos los tamaños.
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Necesito dos escaladores que me permitan escalar los datos en ejecución
//Uno para el eje X y otro para el eje Y
var xScale = d3.scaleLinear()
    .domain([0, d3.max(poblaciones)])
    .range([0, svgWidth]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(areas)])
    //Nótese que el rango en Y es alrevez que el rango en X
    .range([svgHeight, 0]);

//Ahora defino los dos ejes
var eje_x = d3.axisBottom()
    .scale(xScale);
var eje_y =d3.axisLeft()
    .scale(yScale);

//Ahora coloco los dos ejes en el svg
svg.append("g")
    /*
    El transform es para transformar la posición del eje
    Esto se define como colocarlo 30 a la derecha, 10 hacia arriba de la
    esquina inferior izquierda
    */
    .attr("transform", "translate(50,10)")
    .call(eje_y);

//Para el eje x tengo que colocar más abajo del svg
var xAxisTranslate = svgHeight - 20;

svg.append("g")
    .attr("transform", "translate(50, " + xAxisTranslate  +")")
    .call(eje_x);
