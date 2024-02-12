console.log('📒 miscript.js');
var espacios;
var animales;

Promise.all([
    fetch('datos/espaciosnaturales.json').then(response => response.json()),
    fetch('datos/animales.json').then(response => response.json())
])
    .then(([espaciosData, animalesData]) => {
        espacios = espaciosData;
        animales = animalesData;
        document.getElementById('tablaanimales').innerHTML = veranimales();
        document.getElementById('espacios_cards').innerHTML = verEspaciosGaleria();
    })
    .catch(error => console.error('Error:', error));

function veranimales() {
    let res = `<table class="table"><thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre Comun </th>
        <th scope="col">Descripción</th>
        <th scope="col">Imagen</th>
        <th scope="col">enlace</th>
      </tr>
    </thead>
    <tbody>`;

    for (let i = 0; i < animales.length; i++) {

        res += '<tr>';
        res += '<th scope="row">' + animales[i].id + '</th>';
        res += '<td>' + animales[i].nombre + '</td>';
        res += '<td>Thornton</td><td>@fat</td>';
        res += '<td><a href="animal.html?animal=' + animales[i].id + '">ficha</a></td>';
        res += '</tr>';
    }
    res += '</tbody></table>';
    return res;
}

/* invocada en index.html */
function verEspaciosGaleria () {
  
  var res1;
  res1 = '<h5>Espacios</h5>';
  console.log('espacios ' + espacios.length)
  for (let i = 0; i < espacios.length; i++) { 
    console.log('paso ' + i ) ;
    console.log(`espacio  ${espacios[i].nombre} `) ;
    res1 += ' <div class="col-sm-4">';
    res1 += '<!-- component card -->';
    res1 += '<div class="card">'; 
    res1 +=  `<img src="${espacios[i].foto}" class="card-img-top" alt="Imagen de ${espacios[i].nombre}">`;
    res1 +=  `  <div class="card-body">`
    res1 +=  `    <h5 class="card-title">${espacios[i].nombre}</h5>`;
    res1 +=  `    <p class="card-text">${espacios[i].descripcion}</p>`;
    res1 +=  `   <a href="espacio.html?id=${espacios[i].id}" class="btn btn-primary">Ver mas</a>`;
    res1 +=  `  </div>`;
    res1 +=  `</div>`;
    res1 +=  `</div>`;
  }
  console.log(res1);
  return res1;

}


/* document.getElementById('tablaanimales').innerHTML = veranimales();

document.getElementById('espacios_cards').innerHTML = verEspaciosGaleria(); */




