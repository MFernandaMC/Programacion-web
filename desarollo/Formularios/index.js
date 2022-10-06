// document.getElementById('btnSend').addEventListener('click', () => {
//     let usrname = document.getElementById('inputUsarname').value;
//     alert(usrname)
// });


document.getElementById('btn').addEventListener('click', () => {
    let item = document.getElementById('btn');
    item.style.color = "white";
    item.style.background = "pink";
    item.style.textAlign = "left";
    item.style.fontFamily = "Time New Roman";
});
// setTimeout(() => {
//     alert("hola");
//     let item = document.getElementById('hola');
//     item.style.color = "red";
// }, 2500);

setInterval( mundo, 1000 ); 

function mundo() {
    let fecha = new Date();
    let item = document.getElementById('hola');
    item.innerText = fecha;
};



document.getElementById('btn').addEventListener('click', () => {
    let usr = document.getElementById('inputUsarname').value;
    let pass = document.getElementById('inputPassword').value;
    
    if(usr === "fer" && pass === "12345"){
        alert("Sesion iniciada"); 
        sessionStorage.setItem("login", "true");
    }else{
        alert ("Usuario/Contraseña incorrecta")
        sessionStorage.setItem("login", "false")
    }
    
    let Sesion = sessionStorage.getItem("login");
    console.log(Sesion);

    setInterval(() => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        
        let item = document.getElementById("body");
        let bck = "rgb(" + red + "," + green + "," + blue + ")";
        item.style.background = bck;
    
    }, 1000);



});

