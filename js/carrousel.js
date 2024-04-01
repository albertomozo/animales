document.addEventListener('DOMContentLoaded', function() {
    // Obtener el contenedor del carrusel
    var carouselInner = document.querySelector('.carousel-inner');

    // Verificar si el contenedor del carrusel existe
    if (carouselInner) {
        // Obtener los datos del localStorage y convertirlos a objetos JavaScript
        var lugares = JSON.parse(localStorage.getItem('espacios'));
        function comparacionAleatoria() {
            return 0.5 - Math.random();
        }
        
        // Ordenar aleatoriamente el array de lugares
        lugares.sort(comparacionAleatoria);

        // Recorrer los lugares y crear los elementos del carrusel
        lugares.forEach(function(lugar, index) {
            // Crear el elemento de la imagen
            var img = document.createElement('img');
            img.classList.add('d-block', 'w-100');
            img.src = lugar.foto;
            img.alt = lugar.nombre;

            // Crear el elemento del carrusel-item
            var carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            // Crear el elemento de la descripción del carrusel
            var carouselCaption = document.createElement('div');
            carouselCaption.classList.add('carousel-caption', 'd-none', 'd-md-block');
            carouselCaption.innerHTML = `
                <h5>${lugar.nombre}</h5>
                <p>${lugar.descripcion}</p>
            `;

            // Añadir la imagen y la descripción al carrusel-item
            carouselItem.appendChild(img);
            carouselItem.appendChild(carouselCaption);

            // Añadir el carrusel-item al contenedor del carrusel
            carouselInner.appendChild(carouselItem);
        });

        // Añadir los indicadores del carrusel
        var carouselIndicators = document.querySelector('.carousel-indicators');
        lugares.forEach(function(_, index) {
            var indicator = document.createElement('button');
            indicator.type = 'button';
            indicator.setAttribute('data-bs-target', '#carouselExampleCaptions');
            indicator.setAttribute('data-bs-slide-to', index);
            if (index === 0) {
                indicator.classList.add('active');
            }
            carouselIndicators.appendChild(indicator);
        });

        // Añadir los controles del carrusel
        var carouselControls = `
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        `;
        document.querySelector('#carouselExampleCaptions').innerHTML += carouselControls;
    } else {
        console.error('No se encontró el contenedor del carrusel.');
    }
});
