let btnAdd = document.querySelector('.botonAdd');
let btnRem = document.querySelector('.botonRemove');

btnAdd.addEventListener('click', agregar);
btnRem.addEventListener('click', eliminar);

function agregar()
{
    var id = prompt("Introduzca el id de la pelicula: ");
    var pelicula = prompt("Introduzca el nombre de la pelicula: ");
    var calificacion = prompt("Introduzca la calificacion de la pelicula: ");
    var imagen = prompt("Introduzca la referencia de la imagen: ");
    agregarFila(id, pelicula, calificacion, imagen);
}

function agregarFila(top, pelicula, calificacion, imagen) 
{
    var nuevaImagen = new Image(); 

    var table = document.getElementById("tabla");

    var row = table.insertRow(-1);

    var celda1 = row.insertCell(0);
    var celda2 = row.insertCell(1);
    var celda3 = row.insertCell(2);
    var celda4 = row.insertCell(3);

    celda1.innerHTML = top;
    celda2.innerHTML = pelicula;
    celda3.innerHTML = calificacion;
    alert("Se procede a la carga en memoria de la imagen");
    nuevaImagen = cargarImagen(imagen); 
    celda4.innerHTML = nuevaImagen;
}

function eliminar()
{
    var table = document.getElementById("tabla");
    var rowCount = table.rows.length;
    //console.log(rowCount);
    
    if(rowCount <= 1)
        alert('No se puede eliminar el encabezado');
    else
        table.deleteRow(rowCount -1);
}

function inicio() 
{ 
    var nuevaImagen = new Image(); 
    alert("Se procede a la carga en memoria de la imagen"); 
    nuevaImagen = cargarImagen("ejemplo.png"); 
}

function cargarImagen(url) 
{ 
    var imagen = new Image(); 
    imagen.onload = imagenCargada; 
    imagen.src = url; 
    return imagen; 
} 
function imagenCargada() 
{ 
    alert("La imagen se ha cargado correctamente"); 
}
