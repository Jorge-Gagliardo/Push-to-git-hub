function crearAlerta(){
    alert("Cargando informe meteorógico");
}
function ocultarMensaje(){
    var elemento = document.querySelector(".cookie");
    console.log(elemento);
    elemento.classList.add("esconder")
}
function cambiarGrados(elemento){
    console.log(elemento.value);
    if(elemento.value == "farenheit"){
        let num = document.getElementsByClassName("rojo");
        for (var i=0; i<num.length; i++){
            var valor = num[i].innerText;
            console.log("este es el primer valor", valor)
            valor.slice(0,2);
            console.log(valor);
            let var_int = parseInt(valor);
            console.log(var_int);
            num[i].innerText = Math.trunc(var_int * (9/5) + 32);
        }
    }else{
        let num = document.getElementsByClassName("rojo");
        for (var i=0; i<num.length; i++){
            var valor = num[i].innerText;
            valor.slice(0,2);
            let var_int = parseInt(valor);
            console.log(var_int);
            num[i].innerText = Math.trunc((var_int - 32) *(5/9));
    }
    }
}