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
    const nosotros = document.getElementById('nosotros');
    const proposito = document.getElementById('proposito');
    const valores = document.getElementById('valores-container');
    const equipo_container = document.getElementById('equipo-container');

    $.ajax({
        url: 'http://localhost/la-canasta-de-hoy-backend-cliente/public/api/empresa',
        method: 'get',
        type: 'json',
        success: function (response) {
            nosotros.innerText = response.data[0].nosotros;
            proposito.innerText = response.data[0].proposito;
        }
    })
    $.ajax({
        url: 'http://localhost/la-canasta-de-hoy-backend-cliente/public/api/valores',
        method: 'get',
        type: 'json',
        success: function (response) {
            response.data.forEach(valor => {
                valores.insertAdjacentHTML("beforeend", `
                <div class="card ${valor.nombre.toLowerCase().split(' ').join('-')}">
                    <img src="${valor.url_icon}" alt="ícono">
                    <h3>${valor.nombre}</h3>
                    <p>${valor.descripcion}</p>
                </div>
                `)
            });
        }
    })
    $.ajax({
        url: 'http://localhost/la-canasta-de-hoy-backend-cliente/public/api/equipo',
        method: 'get',
        type: 'json',
        success: function (response) {
            response.data.forEach(empleado => {
                equipo_container.insertAdjacentHTML("beforeend", `
                    <div>
                        <div class="foto-container"><img src="${empleado.url_foto_perfil}" alt="foto de ${empleado.nombres}"></div>
                        <div>
                            <h3>${empleado.nombres} ${empleado.apellidos}</h3>
                            <p>${empleado.descripcion}</p>
                            <a href="${empleado.url}"><img src="images/redes sociales/linkedin.png" alt="${empleado.nombre}"></a>
                        </div>
                    </div>
                `)
            });
        }
    })
})
