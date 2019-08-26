//Aquí van los datos de todos los cantones

//Tengo que colocar las variables del Xlsx suministrado en el repositorio aquí:
//https://es.wikipedia.org/wiki/Anexo:Cantones_de_Costa_Rica_por_población
var cantones = [
    { nombre: "San José", poblacion: 288054, area: 44.62, densidad: 6445.71 },
    { nombre: "Alajuela", poblacion: 254886, area: 388.43, densidad: 656.20 },
    { nombre: "Desamparados", poblacion: 208411, area: 118.26, densidad: 1751.31 },
    { nombre: "San Carlos", poblacion: 163745, area: 3347.98, densidad: 48.91 },
    { nombre: "Cartago", poblacion: 147898, area: 287.77, densidad: 513.95 },

    { nombre: "Pérez Zeledón", poblacion: 134534, area: 1905.51, densidad: 70.60 },
    { nombre: "Pococí", poblacion: 125962, area: 2403.49, densidad: 52.41 },
    { nombre: "Heredia", poblacion: 123616, area: 282.60, densidad: 437.42 },
    { nombre: "Puntarenas", poblacion: 115019, area: 1842.33, densidad: 62.43 },
    { nombre: "Goicoechea", poblacion: 115084, area: 31.50, densidad: 3653.46 },
    //10
    { nombre: "La Unión", poblacion: 99399, area: 44.83, densidad: 2217.24 },
    { nombre: "Limón", poblacion: 94415, area: 1765.79, densidad: 53.47 },
    { nombre: "San Ramón", poblacion: 80566, area: 1018.64, densidad: 79.09 },
    { nombre: "Alajuelita", poblacion: 77603, area: 21.17, densidad: 3665.71 },
    { nombre: "Turrialba", poblacion: 69616, area: 1642.67, densidad: 42.38 },

    { nombre: "Grecia", poblacion: 65824, area: 141.52, densidad: 465.12 },
    { nombre: "Curridabat", poblacion: 65206, area: 15.95, densidad: 4088.15 },
    { nombre: "Tibás", poblacion: 64842, area: 8.15, densidad: 7956.07 },
    { nombre: "Liberia", poblacion: 62987, area: 1436.47, densidad: 43.85 },
    { nombre: "Vásquez de Coronado", poblacion: 60486, area: 222.20, densidad: 272.21 },
    //20
    { nombre: "Aserrí", poblacion: 57892, area: 167.10, densidad: 346.45 },
    { nombre: "Paraíso", poblacion: 57743, area: 411.91, densidad: 140.18 },//*
    { nombre: "Sarapiquí", poblacion: 57147, area: 2140.54, densidad: 26.70 },
    { nombre: "Siquirres", poblacion: 56786, area: 860.19, densidad: 66.02 },
    { nombre: "Moravia", poblacion: 56919, area: 28.62, densidad: 1988.78 },

    { nombre: "Escazú", poblacion: 56509, area: 34.39, densidad: 1643.18 },
    { nombre: "Santa Cruz", poblacion: 55104, area: 1312.27, densidad: 41.99 },
    { nombre: "Nicoya", poblacion: 50825, area: 1333.68, densidad: 38.11 },
    { nombre: "Montes de Oca", poblacion: 49132, area: 15.16, densidad: 3240.90 },
    { nombre: "Santa Ana", poblacion: 49123, area: 61.42, densidad: 799.79 },
    //30*
    { nombre: "La Unión", poblacion: 99399, area: 44.83, densidad: 2217.24 },//*
    { nombre: "Limón", poblacion: 94415, area: 1765.79, densidad: 53.47 },
    { nombre: "San Ramón", poblacion: 80566, area: 1018.64, densidad: 79.09 },
    { nombre: "Alajuelita", poblacion: 77603, area: 21.17, densidad: 3665.71 },
    { nombre: "Turrialba", poblacion: 69616, area: 1642.67, densidad: 42.38 },

    { nombre: "Grecia", poblacion: 65824, area: 141.52, densidad: 465.12 },
    { nombre: "Curridabat", poblacion: 65206, area: 15.95, densidad: 4088.15 },
    { nombre: "Tibás", poblacion: 64842, area: 8.15, densidad: 7956.07 },
    { nombre: "Liberia", poblacion: 62987, area: 1436.47, densidad: 43.85 },
    { nombre: "Vásquez de Coronado", poblacion: 60486, area: 222.20, densidad: 272.21 },
    //40
    { nombre: "La Unión", poblacion: 99399, area: 44.83, densidad: 2217.24 },
    { nombre: "Limón", poblacion: 94415, area: 1765.79, densidad: 53.47 },
    { nombre: "San Ramón", poblacion: 80566, area: 1018.64, densidad: 79.09 },
    { nombre: "Alajuelita", poblacion: 77603, area: 21.17, densidad: 3665.71 },
    { nombre: "Turrialba", poblacion: 69616, area: 1642.67, densidad: 42.38 },

    { nombre: "Grecia", poblacion: 65824, area: 141.52, densidad: 465.12 },
    { nombre: "Curridabat", poblacion: 65206, area: 15.95, densidad: 4088.15 },
    { nombre: "Tibás", poblacion: 64842, area: 8.15, densidad: 7956.07 },
    { nombre: "Liberia", poblacion: 62987, area: 1436.47, densidad: 43.85 },
    { nombre: "Vásquez de Coronado", poblacion: 60486, area: 222.20, densidad: 272.21 },
    //50
    { nombre: "La Unión", poblacion: 99399, area: 44.83, densidad: 2217.24 },
    { nombre: "Limón", poblacion: 94415, area: 1765.79, densidad: 53.47 },
    { nombre: "San Ramón", poblacion: 80566, area: 1018.64, densidad: 79.09 },
    { nombre: "Alajuelita", poblacion: 77603, area: 21.17, densidad: 3665.71 },
    { nombre: "Turrialba", poblacion: 69616, area: 1642.67, densidad: 42.38 },

    { nombre: "Grecia", poblacion: 65824, area: 141.52, densidad: 465.12 },
    { nombre: "Curridabat", poblacion: 65206, area: 15.95, densidad: 4088.15 },
    { nombre: "Tibás", poblacion: 64842, area: 8.15, densidad: 7956.07 },
    { nombre: "Liberia", poblacion: 62987, area: 1436.47, densidad: 43.85 },
    { nombre: "Vásquez de Coronado", poblacion: 60486, area: 222.20, densidad: 272.21 },
    //60
    { nombre: "La Unión", poblacion: 99399, area: 44.83, densidad: 2217.24 },
    { nombre: "Limón", poblacion: 94415, area: 1765.79, densidad: 53.47 },
    { nombre: "San Ramón", poblacion: 80566, area: 1018.64, densidad: 79.09 },
    { nombre: "Alajuelita", poblacion: 77603, area: 21.17, densidad: 3665.71 },
    { nombre: "Turrialba", poblacion: 69616, area: 1642.67, densidad: 42.38 },

    { nombre: "Grecia", poblacion: 65824, area: 141.52, densidad: 465.12 },
    { nombre: "Curridabat", poblacion: 65206, area: 15.95, densidad: 4088.15 },
    { nombre: "Tibás", poblacion: 64842, area: 8.15, densidad: 7956.07 },
    { nombre: "Liberia", poblacion: 62987, area: 1436.47, densidad: 43.85 },
    { nombre: "Vásquez de Coronado", poblacion: 60486, area: 222.20, densidad: 272.21 },
    //70
    { nombre: "La Unión", poblacion: 99399, area: 44.83, densidad: 2217.24 },
    { nombre: "Limón", poblacion: 94415, area: 1765.79, densidad: 53.47 },
    { nombre: "San Ramón", poblacion: 80566, area: 1018.64, densidad: 79.09 },
    { nombre: "Alajuelita", poblacion: 77603, area: 21.17, densidad: 3665.71 },
    { nombre: "Turrialba", poblacion: 69616, area: 1642.67, densidad: 42.38 },

    { nombre: "Grecia", poblacion: 65824, area: 141.52, densidad: 465.12 },
    { nombre: "Curridabat", poblacion: 65206, area: 15.95, densidad: 4088.15 },
    { nombre: "Tibás", poblacion: 64842, area: 8.15, densidad: 7956.07 },
    { nombre: "Liberia", poblacion: 62987, area: 1436.47, densidad: 43.85 },
    { nombre: "Vásquez de Coronado", poblacion: 60486, area: 222.20, densidad: 272.21 },
    //80
    { nombre: "Liberia", poblacion: 62987, area: 1436.47, densidad: 43.85 },
    { nombre: "Vásquez de Coronado", poblacion: 60486, area: 222.20, densidad: 272.21 }
];

//{ nombre: "Heredia", poblacion: 123.616, area: 282.60, densidad: 437.42 }
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