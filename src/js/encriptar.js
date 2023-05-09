export function encriptar(texto) {
    const cadena = texto.split("");
    const cadenaCodificada = cadena.map(elemento=>cambiar(elemento));
    return cadenaCodificada.join("");
}
function cambiar(letra) {
  switch (letra) {
    case "a":
      return "ai";
    case "e":
      return "enter";
    case "i":
      return "imes";
    case "o":
      return "ober";
    case "u":
      return "ufat";
    default:
        return letra;
  }
}
