
document.getElementById('btn').addEventListener('click',()=> {
    let usr = document.getElementById('inputUsarname').value;
    let pswr = document.getElementById('inputPassword').value;
    let session = sessionStorage.getItem("login");
    console.log(session);

    if(usr === "juan" && pswr === "juanito"){
        alert("sesion iniciada");
        sessionStorage.setItem("login", "true");
    }else{
        alert ("usuario o contraseña incorrecta");
        sessionStorage.setItem("login", "falce");
    }

})

setInterval(() => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let item = document.getElementById("body");
    let bck = "rgb(" + red + "," + green + "," + blue + ")";
    item.style.background = bck;

}, 3000)