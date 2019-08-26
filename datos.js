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
    //30
    { nombre: "San Rafael", poblacion: 45965, area: 48.39, densidad: 949.89 },
    { nombre: "Oreamuno", poblacion: 45473, area: 202.31, densidad: 224.77 },
    { nombre: "Buenos Aires", poblacion: 45244, area: 2384.22, densidad: 18.98 },
    { nombre: "Upala", poblacion: 43953, area: 1580.67, densidad: 27.81 },
    { nombre: "Naranjo", poblacion: 42713, area: 126.62, densidad: 337.33 },

    { nombre: "Corredores", poblacion: 41831, area: 620.60, densidad: 67.40 },
    { nombre: "El Guarco", poblacion: 41793, area: 167.69, densidad: 249.23 },
    { nombre: "Guácimo", poblacion: 41266, area: 576.48, densidad: 71.58 },
    { nombre: "Barva", poblacion: 40072, area: 24.84, densidad: 1613.20 },
    { nombre: "Santo Domingo", poblacion: 40072, area: 24.84, densidad: 1613.20 },
    //40
    { nombre: "Golfito", poblacion: 39150, area: 1753.96, densidad: 22.32 },
    { nombre: "Coto Brus", poblacion: 38453, area: 933.91, densidad: 41.17 },
    { nombre: "Matina", poblacion: 37122, area: 577.54, densidad: 64.28 },
    { nombre: "Carrillo", poblacion: 77603, area: 21.17, densidad: 3665.71 },
    { nombre: "Santa Bárbara", poblacion: 36243, area: 53.21, densidad: 681.13 },

    { nombre: "Palmares", poblacion: 34716, area: 38.06, densidad: 912.14 },
    { nombre: "Puriscal", poblacion: 33004, area: 553.00, densidad: 59.68 },
    { nombre: "Talamanca", poblacion: 30712, area: 2809.93, densidad: 10.93 },
    { nombre: "Osa", poblacion: 29433, area: 1930.24, densidad: 15.25 },
    { nombre: "Poás", poblacion: 29199, area: 73.84, densidad: 395.44 },
    //50
    { nombre: "Esparza", poblacion: 28644, area: 216.80, densidad: 132.12 },
    { nombre: "San Pablo", poblacion: 27671, area: 7.53, densidad: 3674.77 },
    { nombre: "Quepos", poblacion: 26861, area: 543.77, densidad: 49.40 },
    { nombre: "Mora", poblacion: 26294, area: 162.04, densidad: 162.27 },
    { nombre: "Cañas", poblacion: 26201, area: 682.20, densidad: 38.41 },

    { nombre: "Atenas", poblacion: 25460, area: 127.19, densidad: 200.17 },
    { nombre: "Los Chiles", poblacion: 23735, area: 1358.86, densidad: 17.47 },
    { nombre: "Belén", poblacion: 21633, area: 12.15, densidad: 1780.49 },
    { nombre: "San Isidro", poblacion: 20633, area: 26.96, densidad: 765.32 },
    { nombre: "Orotina", poblacion: 20341, area: 141.92, densidad: 143.33 },
    //60
    { nombre: "Acosta", poblacion: 20209, area: 342.24, densidad: 59.05 },
    { nombre: "Flores", poblacion: 20037, area: 6.96, densidad: 2878.88 },
    { nombre: "Tilarán", poblacion: 19640, area: 638.39, densidad: 30.76 },
    { nombre: "Bagaces", poblacion: 19536, area: 1273.49, densidad: 15.34 },
    { nombre: "La Cruz", poblacion: 19181, area: 1383.90, densidad: 13.86 },

    { nombre: "Valverde Vega", poblacion: 18085, area: 120.25, densidad: 150.40 },
    { nombre: "Abangares", poblacion: 18039, area: 675.76, densidad: 26.69 },
    { nombre: "Garabito", poblacion: 17229, area: 316.31, densidad: 54.47 },
    { nombre: "Tarrazú", poblacion: 16280, area: 297.50, densidad: 54.72 },
    { nombre: "Parrita", poblacion: 16115, area: 478.79, densidad: 33.66 },
    //70*
    { nombre: "Guatuso", poblacion: 15508, area: 758.32, densidad: 20.45 },//*
    { nombre: "Jiménez", poblacion: 14669, area: 286.43, densidad: 51.21 },
    { nombre: "Alvarado", poblacion: 14312, area: 81.06, densidad: 176.56 },
    { nombre: "Montes de Oro", poblacion: 12950, area: 244.76, densidad: 52.91 },
    { nombre: "Zarcero", poblacion: 12205, area: 155.13, densidad: 78.68 },

    { nombre: "León Cortés", poblacion: 12200, area: 120.80, densidad: 100.99 },
    { nombre: "Nandayure", poblacion: 11121, area: 565.59, densidad: 19.66 },
    { nombre: "Río Cuarto", poblacion: 11074, area: 254.20, densidad: 44.57 },//*****
    { nombre: "Hojancha", poblacion: 7197, area: 261.42, densidad: 27.53 },
    { nombre: "Dota", poblacion: 6948, area: 400.22, densidad: 17.36 },
    //80
    { nombre: "San Mateo", poblacion: 6136, area: 125.90, densidad: 48.74 },
    { nombre: "Turrubares", poblacion: 5512, area: 415.29, densidad: 13.27 }
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