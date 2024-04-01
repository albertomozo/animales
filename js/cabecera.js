var pagina = location.pathname;
console.log(pagina);

document.querySelector('header').innerHTML = `

<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
<img src="img/ciervo.png">
<span class="fs-4">Foto animales</span>
</a>

<ul class="nav nav-pills">
<li class="nav-item"><a href="index.html" class="nav-link ${(pagina=='/index.html') ? 'active' : ''}" aria-current="page">Home</a></li>
<li class="nav-item"><a href="animales.html" class="nav-link  ${(pagina=='/animales.html') ? 'active' : ''}">Animales</a></li>
<li class="nav-item"><a href="espacios.html" class="nav-link  ${(pagina=='/espacios.html') ? 'active' : ''}">Espacios Naturales</a></li>
</ul>`;


document.querySelector('footer').innerHTML = `
<div class="text-center text-lg-start bg-body-tertiary text-muted">
  <!-- Section: Social media -->
  <section class="">
    
    <div class="row">
      <div class="col-md-8">
      </div>
      <div class="col-md-4">
        <a href="https://www.youtube.com/@faunaiberikoarenfototrampe438" class="me-4 text-reset">
          <img src="img/youtube.svg"/ width="64px">
        </a>
        <a href="https://instagram.com/videotrampeo" class="">
          <img src="img/instagram.svg"/ width="64px">
        </a>
        <a href="https://fotoanimales.wordpress.com" class="">
        <img src="img/wordpress.svg"/ width="64px">
        </a>
      </div>
    </div>
  </section>
  

        

       



  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2024 Copyright:
    <a class="text-reset fw-bold" href="https://fotoanimales.wordpress.com">fotoanimales</a> 
    version : <span class="text-reset fw-bold">1.0</span>
  </div>
</div>
`;
