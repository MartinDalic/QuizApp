/**********************************************************
 * Mustafa  ---  LOOM von 2022-09-30
//*********************************************************/

function init() {
    document.getElementById('content').innerHTML += /*html*/`
    <input id="myInput">
    <button onclick="addNote()">Click</button>
    `;   

}


let myInput = document.getElementById('myInput');
console.log('log 1', myInput);
console.log('log 2', document.getElementById('myInput'));
setTimeout(() => {
}, 0);


// Kommentare über >> innerHTML += ``;
function addNote() {
    console.log('log 3', myInput);
    console.log('log 4', document.getElementById('myInput'));
    document.getElementById('content').innerHTML += `
    <p>
        ${myInput.value}<br>
        ${document.getElementById('myInput').value}
    </p>`;
}

/*========*/


