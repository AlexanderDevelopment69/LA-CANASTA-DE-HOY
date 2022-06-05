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
    const cartillacanastas = document.getElementById('carcanasta');



   /* $.ajax({
        url: 'http://localhost/la-canasta-de-hoy-backend-cliente/public/api/carta_canastas',
        method: 'get',
        type: 'json',
        success: function (response) {
            
            response.data.forEach(venta_plato_canasta => {
                cartillacanastas.insertAdjacentHTML("beforeend", `
                <div class="col">
                    <div class="card">
                    <img src="images/logos/canasta_modelo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${venta_plato_canasta.nombre}</h5>
                        <p class="porciones-text">${venta_plato_canasta.descripcion}</p>
                        <p class="porciones-text">${venta_plato_canasta.precio}</p>
                        <div class="btnporciones">
                        <div class="signomas">+</div>
                        <span>${venta_plato_canasta.cantidad}</span>
                        <div class="signomenos">-</div>
                        </div>
                        <div class="btnagregar">
                        <span>Agregar</span>
                        <img src="images/logos/logo-variante-blanco.png" alt="logo">
                        </div>
                    </div>
                </div>
            </div>
                `)
            })
        }
    })*/
    $.ajax({
        url: 'http://localhost/la-canasta-de-hoy-backend-cliente/public/api/carta_canastas',
        method: 'get',
        type: 'json',
        success: function (response) {
            
            response.data.forEach(canasta => {
                cartillacanastas.insertAdjacentHTML("beforeend", `
                <div class="col">
                    <div class="card">
                    <img src="images/logos/canasta_modelo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h1>${canasta.id}</h1>
                        <h5 class="card-title">${canasta.nombre}</h5>
                        <p class="porciones-text">${canasta.descripcion}</p>
                        <p class="porciones-text">${canasta.precio_venta}</p>
                        
                        <p class="btn-holder"><a href="{{ url('add-to-cart/'.${canasta.id}}}" 
                        class="btn btn-warning btn-block text-center" 
                        role="button">Add to cart</a> </p>
                    </div>
                </div>
            </div>
                `)
            })
        }
    })

})
