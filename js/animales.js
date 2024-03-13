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