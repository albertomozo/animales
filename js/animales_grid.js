
let animalesJSON = JSON.parse(localStorage.getItem('animales'));

// Array para almacenar los datos transformados
var animalesTransformados = [];

// Recorrer el JSON original y transformar los datos
animalesJSON.forEach(function(animal) {
    var fila = [
        animal.nombre || "",
        animal.cientifico || "",
        animal.familia || "",
        `<a href="animal.html?id=${animal.id}">ficha</a>` || ""
    ];
    animalesTransformados.push(fila);
});
console.log(animalesTransformados);

new gridjs.Grid({
  columns :[
    { name: "Nombre", formatter: (cell) => gridjs.html(cell) },
    { name: "Cientifico", formatter: (cell) => gridjs.html(cell) },
    { name: "Family", formatter: (cell) => gridjs.html(cell) },
    { name: "Ficha", formatter: (cell) => gridjs.html(cell) }
  ],
    data: animalesTransformados,
    search : true,
    sort: true
  }).render(document.getElementById("wrapper"));

  // version html 

 /*  animalesJSON.forEach(function(animal) {
    var fila = [
        animal.nombre || "",
        animal.cientifico || "",
        animal.familia || ""
       
    ];
    animalesTransformados.push(fila);
});

  new gridjs.Grid({
    columns: [
        { 
          name: 'Nombre',
          formatter: (cell) => html(`<b>${cell}</b>`)
        },
        { 
            name: 'Cientifico',
            formatter: (cell) => html(`<b>${cell}</b>`)
        },
        { 
            name: 'Familia',
            formatter: (cell) => html(`<b>${cell}</b>`)
          },
        'Ficha',
        { 
          name: 'ficha',
          formatter: (_, row) => html(`<a href="animal.htm?id=${animal.id}">ficha</a>`)
        }
     ],
    data: animalesTransformados
  }).render(document.getElementById('#wrapper')); */
 