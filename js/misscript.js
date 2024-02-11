console.log('📒 miscript.js');
let espacios ;
fetch('datos/espaciosnaturales.json')
.then(response => response.text())
.then(data =>{
    console.log('📗data text' + data);
    espacios = JSON.parse(data);
    console.log('📕espacios json' + espacios);
})
.catch(error => console.error('Error:', error));
