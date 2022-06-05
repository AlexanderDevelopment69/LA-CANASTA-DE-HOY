const menu = document.getElementById('btnmenu');
const navbar = document.getElementById('navbar');
const plato = document.getElementById('plato1');
let plato_id = 3;

/*menu.addEventListener('click', function () {
  if (navbar.style.display == 'block') {
    navbar.style.display = 'none';
  }
  else {
    navbar.style.display = 'block';
  }

})*/

plato.addEventListener('click', function () {
  const urlDominioAPICliente = 'https://api-cliente.dev.lacanastadehoy.com/public/api/';
  var canasta_id;

  //api canastaid_platoid, para el id de la canasta que contiene este plato
  $.ajax({
    url: urlDominioAPICliente+'canastaid_by_platoid/'+plato_id,
    method: 'get',
    type: 'json',
    beforeSend: () => {
      console.log('Cargando API canastaid_by_platoid');
    },
    success: (response) => {
      canasta_id = response[0].canasta_id;
      console.log('Se cargó la info exitosamente');
      document.location.href = 'https://app-cliente.dev.lacanastadehoy.com/public/canasta'+'?'+canasta_id;
    },
  });
})

