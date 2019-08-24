
//Este archivo define cómo se muestra el contenido del gráfico.

/*
Si no coloco la importación de d3 en el html debo colocar esto aquí
para poder usar D3 aquí
*/
//var d3 = require("d3");

//Tengo que colocar las variables del Xlsx suministrado en el repositorio aquí:
//https://es.wikipedia.org/wiki/Anexo:Cantones_de_Costa_Rica_por_población
var poblaciones = [];
var areas = [];
var densidades = [];

/*
Ahora colocar las dimensiones específicas del svg, que es donde dibujaré todo
SVG significa Scalable Vector Graphics.
*/
//500 de ancho, 300 de alto, 5 de relleno a los dos lados
var svgWidth = 800, svgHeight = 400;//, barPadding = 5;
//var barWidth = (svgWidth / dataset.length);

//Selecciono el svg
var svg = d3.select('svg')
    //Modifico sus atributos
    .attr("width", svgWidth)
    .attr("height", svgHeight);
