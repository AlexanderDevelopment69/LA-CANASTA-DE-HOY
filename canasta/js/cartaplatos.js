









const menu = document.getElementById('btnmenu');
const navbar = document.getElementById('navbar');



menu.addEventListener('click', function () {
    if (navbar.style.display == 'block') {
        navbar.style.display = 'none';
    }
    else {
        navbar.style.display = 'block';
    }
})

window.addEventListener('load', function () {
    const cartilla = document.getElementById('cartilla');



    $.ajax({
        url: 'http://localhost/la-canasta-de-hoy-backend-cliente/public/api/carta_platos',
        method: 'get',
        type: 'json',
        success: function (response) {
            
            response.data.forEach(plato => {
                cartilla.insertAdjacentHTML("beforeend", `
                <div class="col">
                    <div class="card">
                    <img src="${plato.url_foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${plato.nombre}</h5>
                        <p class="porciones-text">${plato.descripcion}</p>
                        <div class="btnporciones">
                        <div class="signomas">+</div>
                        <span>1</span>
                        <div class="signomenos">-</div>
                        </div>
                        <div class="btn">
                        <span>Agregar</span>
                        <img src="images/logos/logo-variante-blanco.png'" alt="logo">
                        </div>
                    </div>
                </div>
            </div>
                `)
            })
        }
    })

})
