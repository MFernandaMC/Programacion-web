document.getElementById('btn').addEventListener('click', () => {
    let item = document.getElementById('tableContent');
    let inp = document.getElementById('inpName').value;
    let nombre = 'Samuel';
    let edad = '22'
    let programa = 'IAT'
    item.innerHTML += `
    <tr>
        <td>${inp}</td>
        <td>${edad}</td>
        <td>${programa}</td>
    </tr>`;


    
});