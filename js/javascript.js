let tareas = []

const initTareas = () => {

    let arrayTareas = []
    arrayTareas.push(localStorage.getItem("tareas"))

    arrayTareas.forEach((el) => {
        tareas.push(el)
    })
    console.log(tareas)
    return tareas
}
initTareas()

$(document).ready(function () {
    // Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

    // Funciones
    var agregarTarea = function () {
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);
        //console.log(tarea)
        tareas.push(tarea)
        localStorage.setItem("tareas", JSON.stringify(tareas))


        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }

        // Agregamos el contenido al enlace
        enlace.appendChild(contenido);
        // Le establecemos un atributo href
        enlace.setAttribute("href", "#");
        // Agrergamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";

        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function () {
                this.parentNode.removeChild(this);
            });
        }

    };
    var comprobarInput = function () {
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };

    var eleminarTarea = function () {
        this.parentNode.removeChild(this);
    };

    // Eventos

    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    // Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);

    // Borrando Elementos de la lista
    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }
})
//Jquery

$("h1").html("<h1>Controlador</h1>");
$("h1").text("Controlador de tareas");
$("h1").attr("id", "OtroID");
$("#form").val("@@@");

