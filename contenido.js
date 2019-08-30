
//Este archivo define cómo se muestra el contenido del gráfico, cuyos datos se encuentran en datos.js.

/*
Ahora colocar las dimensiones específicas del svg, que es donde dibujaré todo
SVG significa Scalable Vector Graphics.
*/
var svgWidth = 900, svgHeight = 500;

var barWidth = (svgWidth / cantones.length);

var colorFigura = "#ff00ff";

var tamannoFigura = 20;

var tipoDibujo = "burbujas";

//Selecciono el svg
var svg = d3.select('svg')
    //Modifico sus atributos, para definir todos los tamaños.
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Necesito dos escaladores que me permitan escalar los datos en ejecución
//Uno para el eje X y otro para el eje Y
var xScale = d3.scaleLinear()
    .domain([max(d3.min(poblaciones) - 5000, 0), d3.max(poblaciones) + 5000])//estos 5000 es para dejar algo de espacio extra
    .range([40, svgWidth-30]);

var yScale = d3.scaleLinear()
    .domain([max(d3.min(areas) - 50, 0), d3.max(areas) + 100])
    //Nótese que el rango en Y es alrevez que el rango en X
    .range([svgHeight, 40]);

/*
Ahora necesito un nuevo escalador para evitar que una burbuja sea insignificantemente pequeña, o gigantesca
Para esto declaro una variable que luego multiplicaré con el tamaño base de las burbujas.
Para esto defino una variable que me diga el radio mínimo, el radio máximo, y finalmente el tamaño base.
*/
var multiplicadorMaximo = 2; //Estas dos variables se podrá modificar en ejecución
var radioBase = 5;
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
    .attr("transform", "translate(0, " + xAxisTranslate  +")")
    .call(eje_x);

//Necesito tooltips encima de cada elemento para poder mostrar
//información específica de cada figura.
var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {
        return "<strong>Cant\u00F3n:</strong> <span style='color:red'>" + d.nombre + "</span> <br>" +
            "<strong>Poblaci\u00F3n:</strong> <span style='color:red'>" + d.poblacion + " habitantes</span> <br>" +
            "<strong>\u00C1rea:</strong> <span style='color:red'>" + d.area + " km²</span> <br>" +
            "<strong>Densidad:</strong> <span style='color:red'>" + d.densidad + " habitantes/km²</span> <br>";
    });

//Aplico los tooltips
svg.call(tip);

/*
Ahora finalmente colocar algunos elementos dentro del svg
Para este objetivo definí una función que dibuja todos los elementos
En el SVG
*/

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
    .attr("class", "burbujas")
    //Ahora que ya todo está en su lugar, agrego
    //los tooltips a cada una de las figuras colocadas
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);

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
    .attr("class", "rectangulo")
    .attr("visibility", "hidden")
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);
