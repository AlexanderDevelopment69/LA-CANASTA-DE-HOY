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


