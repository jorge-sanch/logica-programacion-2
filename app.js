function kelvin(){
    let resultado
    let grados =  Number(document.getElementById("centigrados").value)
    resultado = 273.15 + grados
    const inyectar = document.getElementById("imprimir").innerHTML = `el valor de ${grados} a Centigrados a Kelvin es: ${resultado}`
}

function faren(){
    let resultado
    let grados =  Number(document.getElementById("centigrados").value)
    resultado = (grados * (9/5))+ 35
    const inyectar = document.getElementById("imprimir").innerHTML = `el valor de ${grados} a Centigrados a Fahrenheit es: ${resultado}`
    
}