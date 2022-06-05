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
    const productores = document.getElementById('productores');


    $.ajax({
        url: 'http://localhost:82/canasta/la-canasta-de-hoy-frontend-cliente/public/api/productores',
        method: 'get',
        type: 'json',
        success: function (response) {
            response.data.forEach(proveedor => {
                productores.insertAdjacentHTML("beforeend", `
                <div class="card ${proveedor.nombre.toLowerCase().split(' ').join('-')}">
                    <img src="${proveedor.url_logo}" alt="ícono">
                    <h2>${proveedor.nombre}</h2>
                    <p>${proveedor.descripcion}</p>
                </div>
                `)
            });
        }
    })
})
