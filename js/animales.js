function getAnimalProp (id, prop) {
    //console.log(`animali ${id}`);
    const animales = JSON.parse(localStorage.getItem('animales'));
    return animales.find(item => item.id === id)[prop];
}

function getAnimalIcono(id) {
    let familia=getAnimalProp(id, 'familia');
    console.log(` familia en get : ${familia} de id : ${id}`);
    if (IconoFamilia[familia]) {
        return IconoFamilia[familia];
    } else {
        return 'piggy-bank-svgrepo-com.svg';
    }
}

function getAnimalAlbum(id){
    const albumes = JSON.parse(localStorage.getItem('album'));
    var respuesta = new Array();
    for (const album of albumes)
    {
         console.log(album);
         const imagenesAlbum  = album.imagenes.filter(imagen => imagen.animalId === id);
         //console.log(imagenesAlbum);
         if (imagenesAlbum){
         for (const imagenAlbum of imagenesAlbum)
         {
            console.log(album.espacioId,album.titulo);
            //console.log(imagenAlbum);
            console.log(imagenAlbum.foto);
            let imagenAlbum2=imagenAlbum;
            imagenAlbum2.espacioId = album.espacioId;
            imagenAlbum2.titulo = album.titulo;
            respuesta.push(imagenAlbum2);
         }
        }
       
         
    }
    return respuesta;
   

}
 