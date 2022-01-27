window.document.getElementsByTagName('button')[0].addEventListener('click' , aperta)
function aperta(){
    let Inicio = window.document.getElementById('IdInicio')
    let Fim = window.document.getElementById('IdFim')
    let Passo = window.document.getElementById('IdPasso')
    let NInicio = Number(Inicio.value)
    let NFim = Number(Fim.value)
    let NPasso = Number(Passo.value)
    if (Inicio.value.length == 0 || Fim.value.length == 0 || Passo.value.length == 0) {
        //window.alert('Digite os Numero Abaixo')
        window.document.getElementsByTagName('section')[0].style.border = '2px solid red'
        window.document.getElementById('resp').innerHTML = 'Falta informação'
        
    } else {
        window.document.getElementById('resp').innerHTML = 'contagem '
        window.document.getElementsByTagName('section')[0].style.border = null
        if (NPasso <= 0) {
            //window.alert('Digite um Numero igual ou superio a 1 No passo')
            window.document.getElementsByTagName('section')[0].style.border = '2px solid red'
            window.document.getElementById('resp').innerHTML = 'Digite um Numero igual ou superio a 1 No passo'
        } else {
            if (NInicio < NFim){
                for (let c = NInicio; c <= NFim;c += NPasso) {
                    window.document.getElementById('resp').innerHTML += `${c} \u{1F449}`
            }  
            } else {
                for (let c = NInicio;c >= NFim; c -= NPasso) {
                    window.document.getElementById('resp').innerHTML += `${c} \u{1F449}`
                }
            }
            window.document.getElementById('resp').innerHTML += `\u{1F3C1}`
        }   
    }
}