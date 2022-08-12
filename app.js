// funcion para imprimir en pantalla
const salida = (textoSalida) => {
    let resultado = document.querySelector(".salida-texto");
    resultado.value = textoSalida;
}
// funcion encriptar utilizando bucle for
const encriptar = () => {
    const texto = document.querySelector("#input-texto").value;

    arrayEncriptado = []

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != "a" && texto[i] != "e" && texto[i] != "i" && texto[i] != "o" && texto[i] != "u") {
            arrayEncriptado.push(texto[i])
        }
        if (texto[i] == "a") {
            arrayEncriptado.push("ai")
        }
        if (texto[i] == "e") {
            arrayEncriptado.push("enter")
        }
        if (texto[i] == "i") {
            arrayEncriptado.push("imes")
        }
        if (texto[i] == "o") {
            arrayEncriptado.push("ober")
        }
        if (texto[i] == "u") {
            arrayEncriptado.push("ufat")
        }
    }

    palabraEncriptada = arrayEncriptado.join("")
    salida(palabraEncriptada);
    document.querySelector("#input-texto").value = ""

}

const botonEncriptar = document.getElementById("botonEncriptar");
botonEncriptar.addEventListener("click", encriptar);

// funcion desencriptar utilizando metodo replace.

const desencriptar = () => {

    const texto = document.querySelector("#input-texto").value;
    palabraDesencriptada = texto.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    salida(palabraDesencriptada);
    document.querySelector("#input-texto").value = ""

}

const botonDesencriptar = document.getElementById("botonDesencriptar");
botonDesencriptar.addEventListener("click", desencriptar)

const copiar = () => {
    let contenido = document.querySelector(".salida-texto").value;
    console.log(contenido)
    navigator.clipboard.writeText(contenido)
        .then(() => {
            alert("texto copiado")
            console.log("Texto copiado")
        })
        .catch(err => {
            alert("ocurrio un error: " + err)
            console.log('Lo siento ocurrio un error:', err);
        })

}

const botonCopiar = document.getElementById("botonCopiar");
botonCopiar.addEventListener("click", copiar)