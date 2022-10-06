document.getElementById('btn').addEventListener('click', () => {
    let div = document.getElementById('tableContent');
    let name =document.getElementById('inputName').value;
    
    let nombre = "Juan";
    let edad = "22 años";
    let prog = "IAT";
    
    
    div.innerHTML += 
    `<tr>
        <td>${name}</td>
        <td>${edad}</td>
        <td>${prog}</td>
    </tr>`;

});