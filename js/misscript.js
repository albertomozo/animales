console.log('📒 miscript.js');
var espacios;
var animales;
var album;
var vconfig;

const config = localStorage.getItem("config") ? JSON.parse(localStorage.getItem("config")) : null;



const fechaActualizacion =  getFechaActualizacion()  
console.log('Condiciones config : ' + config + '  fecha actualizacion ' + fechaActualizacion);

if (config === null || fechaActualizacion === null || config.fecha_actualizacion <= fechaActualizacion ) {
  Promise.all([
        fetch('datos/espaciosnaturales.json').then(response => response.json()),
        fetch('datos/animales.json').then(response => response.json()),
        fetch('datos/album.json').then(response => response.json()),
        fetch('datos/config.json').then(response => response.json())
    ])
    .then(([espaciosData, animalesData,albumData,configData]) => {
        console.log(espaciosData);
        espacios = espaciosData;
        animales = animalesData;
        album = albumData;
        vconfig = configData;
        localStorage.setItem('espacios', JSON.stringify(espacios));
        localStorage.setItem('animales',  JSON.stringify(animales));
        localStorage.setItem('album',  JSON.stringify(animales));
        localStorage.setItem('config',  JSON.stringify(vconfig));

        document.getElementById('tablaanimales').innerHTML = verAnimales();
        document.getElementById('espacios_cards').innerHTML = verEspaciosGaleria();
    })
    .catch(error => {console.error( error)});

  } else { 
      espacios = JSON.parse(localStorage.getItem('espacios'));
      console.log('esp '+ espacios);
      animales = JSON.parse(localStorage.getItem('animales'));
      album = JSON.parse(localStorage.getItem('album'));
      jconfig = JSON.parse(localStorage.getItem('config'));
      console.log('📅 config ' + jconfig);
   

  }

  //console.log('espacios ' + espacios)
  
function verAnimales() {
    let res = `<h2 class="align-center">Animales</h2>
    <table class="table"><thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre Comun </th>
        <th scope="col">N. Cientifico</th>
        <th scope="col">Familia</th>
        <th scope="col">enlace</th>
      </tr>
    </thead>
    <tbody>`;

    for (let i = 0; i < animales.length; i++) {

        res += '<tr>';
        res += '<th scope="row">' + animales[i].id + '</th>';
        res += '<td>' + animales[i].nombre + '</td>';
        res += '<td>' + animales[i].cientifico + '</td><td>' + animales[i].familia + '</td>';
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
    //console.log(`espacio  ${espacios[i].nombre} `) ;
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


function   getFechaActualizacion() {
  console.log(`▶ getFechaActualizacion`);
  return fetch('datos/config.json')
          .then(response => response.json())
          .then(data => {
              console.log(`respuesta  ${data.fecha_actualizacion}`);
              return data.fecha_actualizacion;
          })
          .catch(error => {
              console.error(`Ha ocurrido un error (${error.message})`);
              return null;
          });
}



/* document.getElementById('tablaanimales').innerHTML = veranimales();

document.getElementById('espacios_cards').innerHTML = verEspaciosGaleria(); */




