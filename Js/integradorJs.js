let categoria = document.getElementById("categoria");
let borrar = document.getElementById("borrar");
let primerNombre = document.getElementById("primerNombre");
let apellido = document.getElementById("apellido");
let email= document.getElementById("email");
let cantidad= document.getElementById("cantidad");
const total= document.getElementById("total");
let resumen =document.getElementById("resumen");


resumen.addEventListener("click",()=>{
    let totalAPagar = 0;
    if(primerNombre.value =="") {
        alert ("falta completar nombre");

    } else if (apellido.value ==""){
        alert("falta el apellido");
     }
     else if (email.value==""){
        alert("falta el email");
     }
     else if (cantidad.value==""){
        alert("ingrese un nro valido");
     }
     else if (cantidad.value <= 0){
        alert("ingrese un nro mayor que 0");
     }
     else {
        
        if (categoria.value=="estudiante"){
            totalAPagar = cantidad.value*40;
            total.innerHTML = "El total a pagar es: $ "+ totalAPagar;
        } else if (categoria.value=="trainee"){
            totalAPagar = cantidad.value*100;
            total.innerHTML = "El total a pagar es: $ "+ totalAPagar;
        }else if (categoria.value=="junior"){
            totalAPagar = cantidad.value*170;
            total.innerHTML = "El total a pagar es: $ "+ totalAPagar;
            
        }else {
            totalAPagar = cantidad.value*200;
            total.innerHTML = "El total a pagar es: $ "+ totalAPagar;
        }
    }
    
   
 });
 borrar.addEventListener("click",()=>{
    primerNombre.value="";
    apellido.value="";
    email.value="";
    cantidad.value="";
    categoria.value="publico";
    total.innerHTML="Total a Pagar: $";
 });