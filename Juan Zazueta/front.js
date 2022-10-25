// const { response } = require("express");

// fetch('http://localhost3000/usuarios', {
//     headers:{
// metod: 'GET',
// 'content-type':'application/json; charser_UTF-8'
//     }
// })
// .then((response) => response.json())
// .then((json) => console.log(json))

fetch('http://localhost:3000/usuarios', {
    metod: 'GET',
    headers:{
        'content-type':'application/json; charser_UTF-8'
    }
}).then((response) => response.json())
.then((json) => console.log(json));
