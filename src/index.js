import { mensajeDefauls, mensajeSalida } from "./js/template";
import { encriptar } from "./js/encriptar";
import { desencriptar } from "./js/desencriptar";
import "./styles/index.css"

function inicio(){
    const areaRespuesta =  document.querySelector(".area-respuesta");
    areaRespuesta.innerHTML=mensajeDefauls;
    const areatexto = document.querySelector(".entrada");
    const botones = document.querySelectorAll(".boton-entrada");
    botones[0].addEventListener("click", ()=>{
       proceso(areaRespuesta,areatexto,encriptar );
    });
    botones[1].addEventListener("click", ()=>{
        proceso(areaRespuesta,areatexto,desencriptar);
    });
}
function proceso(respuesta, areatexto, callback){
    if(!areatexto.value){
        respuesta.innerHTML=mensajeDefauls;
    }else{
        const encriptado = callback(areatexto.value);
        mensajeSalida(encriptado);
        areatexto.value="";
    }
}
inicio();
