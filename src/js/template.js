import captura from  "../imagenes/Munheco.svg";


export const mensajeDefauls =`<img src="${captura}" alt="Diamantes" class="imagen">
<div class="area-mensajes">
<h2 class="sub-mensaje">Ningun mensaje fue encontrado</h2>
<p class="texto">Ingresa el texto que desea encriptar o desencriptar.</p>
</div>`;

export const mensajeSalida=(texto)=>{
    document.querySelector(".area-respuesta").innerHTML="";
    const contenedor = document.querySelector(".area-respuesta");
    const boton = document.createElement("button");
    boton.className="boton";
    boton.textContent="Copiar";
    const mensaje = document.createElement("p");

    mensaje.className="texto-respuesta";
    mensaje.textContent=texto;
    boton.addEventListener("click", ()=>{
        navigator.clipboard.writeText(texto);
    });

    contenedor.appendChild(mensaje);
    contenedor.appendChild(boton);
};