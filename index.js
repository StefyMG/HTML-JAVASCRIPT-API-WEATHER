//Objetivo leer el API de The Rick and Morty y mostrar la imagen.
let idPersonaje = Math.floor(Math.random()*826)
fetch ('https://rickandmortyapi.com/api/character/'+idPersonaje)
    // .then(function (response){return response.json();})
    // .then(function(data){console.log(data)});
    .then(response=> response.json())
    .then(data => {
        console.log(data.image)
     })