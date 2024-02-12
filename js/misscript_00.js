console.log('📒 miscript.js');
var espacios ;
var animales ;

fetch('datos/espaciosnaturales.json')
.then(response => response.text())
.then(data =>{
    console.log('📗data text' + data);
    espacios = JSON.parse(data);
    console.log('📕espacios json' + espacios);
})
.catch(error => console.error('Error:', error));

fetch('datos/animales.json')
.then(response => response.text())
.then(data =>{
    console.log('📗data text' + data);
    animales = JSON.parse(data);
    console.log('📕animales json' + animales);
})
.catch(error => console.error('Error:', error));

function veranimales () {
    var res =`<table class="table"><thead>
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

        res+='<tr>';
        res+='<th scope="row">'+animales[i].id+'</th>';
        res+='<td>'+animales[i].nombre+'</td>';
        res +='<td>Thornton</td><td>@fat</td>';
        res += '<td><a href="animal.html?animal='+animales[i].id+'">ficha</a></td>';
        res+='</tr>';
    }
    res +='</tbody></table>';
    return res;

}
document.getElementById('tablaanimales').innerHTML = veranimales();





