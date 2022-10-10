document.getElementById('Btn').addEventListener('click',()=> {
    let usrName = document.getElementById('inputUsarname').value;
    let password = document.getElementById('inputPassword').value;
    /*alert(usrName + " " + password); concatenar dos string*/

    if(usrName === "RepairTec" && password ==="RepairTec"){
        alert("Sesion iniciada");
        sessionStorage.setItem("Login", "true");
    }else{
        alert("Usuario o contraseña incorrecta");
        sessionStorage.setItem("Login","false");
    }

    let session = sessionStorage.getItem("Login");
    console.log(session);

});

// setInterval(() => {
//     let red = Math.floor(Math.random() *256);
//     let green = Math.floor(Math.random() *256);
//     let blue = Math.floor(Math.random() *256);
//     let item = document.getElementById("body");
//     let bck = "rgb("+red + "," + green + "," + blue +")";
//     item.style.background = bck;


// },3000)