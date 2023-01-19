function atualizarTempo(){
    let display = document.getElementById('horario')

    let agora = new Date()
    
    let horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds())
    
    display.innerHTML = horario
}

function corrigirHorario(numero){
    if (numero < 10) {
        numero = '0' + numero
    }
    return numero
}

atualizarTempo()
setInterval(atualizarTempo, 1000)

console.log(horario)