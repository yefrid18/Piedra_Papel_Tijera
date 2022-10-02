
//funcion para numero aleatorio
function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

//funcion para elegir piedra-papel o tijera
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra ✊"  
    } else if(jugada == 2){
        resultado = "Papel 📄"  
    } else if(jugada == 3){
        resultado = "Tijera ✂️"    
    } else {
        resultado = "OPCION INCORRECTA" 
    } 
        return resultado
}

//funcion para el combate
function combate(jugador,pc){
    let dato_combate = ""
    if(jugador == pc){
        dato_combate = "EMPATE"
    }else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 ||  
        jugador == 3 && pc == 2){
        dato_combate = "GANASTE" 
        triunfos+=1     
    }else{
        dato_combate = "PERDISTE"
        derrotas+=1 
    }
    return dato_combate
}

//declaracion de variables
let jugador = 0        
let pc = 0
let triunfos = 0
let derrotas = 0

//uso del ciclo while para determinar ganador al obtener 5 victorias
while (triunfos < 5 && derrotas < 5){
    pc = aleatorio(1,3)      
    jugador = prompt("Elige: 1 Piedra,2 Papel,3 Tijera")
//eleccion de jugador y pc
    alert("Tu eliges: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))        
//COMBATE
    alert(combate(jugador,pc))
}      

//pasar datos desde js al body del html
const h1Element = document.createElement("h1")
let finalisima = "resultado_final"
if (triunfos > derrotas){
   finalisima = (`Obtuviste ${triunfos} triunfos y ${derrotas} derrotas. 
    Eres el Ganador`)
}else{
    finalisima = (`Obtuviste ${triunfos} triunfos y ${derrotas} derrotas. 
    Eres el Perdedor`)
} 
h1Element.innerText = finalisima
document.body.append(h1Element)
