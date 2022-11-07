const valorTicket = 200;

let descEstudiante= 80;
let descTrainee= 50;
let descJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

function total_a_pagar(){
    
    quitarError();
    
    if(nombre.value===""){
        nombre.classList.add("is-invalid");
        return;
    }

    if(apellido.value===""){
        apellido.classList.add("is-invalid");
        return;
    }

    if(correo.value===""){
        correo.classList.add("is-invalid");
        return;
    }

    const emailValido = correo =>
    {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo); 
    }

    if(!emailValido(correo.value)){
        correo.classList.add("is-invalid");
        return;
    }

    if((cantidad.value<=0) || (isNaN(cantidad.value))){

        cantidad.classList.add("is-invalid");
        return;

    }

    let total = cantidad.value*valorTicket;
    if(categoria.value == 1){
        total = total-(descEstudiante/100*total);
    }
    if(categoria.value == 2){
        total = total-(descTrainee/100*total);
    }
    if(categoria.value == 3){
        total = total-(descJunior/100*total);
    }

    totalPago.innerHTML = "Total a pagar: $"+total;
}

function quitarError(){
    let x = document.querySelectorAll(".form-control,.form-select");
    let i;

    for (i=0;i<x.length;i++){
        x[i].classList.remove("is-invalid");
    }
}

function reset_form()
{
    quitarError();
    totalPago.innerHTML="Total a pagar: $";
}

btnResumen.addEventListener("click", total_a_pagar);
btnBorrar.addEventListener("click", reset_form);