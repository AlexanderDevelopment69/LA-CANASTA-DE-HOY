{
  let url =  'http://20.90.112.182:8081/api/Portada-get/1'
  fetch(url)
      .then(response=>response.json())
      .then(data=>mostrarData(data))
      .catch(error=>console.log(error))

      const mostrarData=(data)=>{
        // console.log(data.titulo)
        document.getElementById('titulo').innerHTML = data.titulo ;
        document.getElementById('descripcion').innerHTML = data.descripcion ;
        document.getElementById('subtitulo').innerHTML = data.subtitulo;
        // document.getElementById('imagenAviso').innerHTML = data.url_imagen;
        document.getElementById('imagenAviso').src="http://20.90.112.182:8081/storage/app/"+data.url_imagen;




}



}



{
  let url =  'http://20.90.112.182:8081/api/Portada-get/2'
  fetch(url)
      .then(response=>response.json())
      .then(data=>mostrarData(data))
      .catch(error=>console.log(error))

      const mostrarData=(data)=>{
        // console.log(data.titulo)
        document.getElementById('tituloBanner').innerHTML = data.titulo;
        document.getElementById('descripcionBanner').innerHTML = data.descripcion;
        document.getElementById('imagenBanner').style.backgroundImage="url(http://20.90.112.182:8081/la-canasta-de-hoy-backend-admin/storage/app/"+data.url_imagen+")";


}
}
