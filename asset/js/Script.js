var container = document.getElementById("c1");
container.innerText = "Hola mundo";
container.style.backgroundColor = "#000000";
container.style.color = "#1cb723";
container.style.width = "200px";
container.style.height = "200px";
container.innerHTML = "<input type=”text” placeholder=’escriba su texto’>";

container = document.getElementsByClassName("container c2");
for(let i of container){
    i.style.backgroundColor = "#009999";
    i.innerHTML = "<input type='text' placeholder='Escriba su texto'>";

}

var boton = document.getElementById("btn-click");


boton.onclick = function(evt)
{
alert("Hola mundo");
}

var btncopy = document.getElementById("btnCopy");

btnCopy.onclick = function(evt)
{
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
} 