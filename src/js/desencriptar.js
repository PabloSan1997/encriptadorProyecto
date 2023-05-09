const vocales = [
    {
        encriptado:"ai",
        vocal:"a"
    },
    {
        encriptado:"enter",
        vocal:"e"
    },
    {
        encriptado:"imes",
        vocal:"i"
    },
    {
        encriptado:"ober",
        vocal:"o"
    },
    {
        encriptado:"ufat",
        vocal:"u"
    }
];

export function desencriptar(texto){
    let mensaje = texto;
    vocales.forEach(elemento=>{
        mensaje=cambiar(mensaje, elemento.vocal, elemento.encriptado);
    })
    return mensaje;
}

function cambiar(texto, vocal, encriptado){
    const cadena = texto.split(encriptado);
    return cadena.join(vocal);
}
