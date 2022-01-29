window.document.getElementsByTagName('button')[0].addEventListener('click' , aperta)
window.document.getElementsByTagName('button')[1].addEventListener('click' , fim)
var Vresp = []
//var
var resp = window.document.getElementById('resp')
var cont = window.document.getElementById('cont')
var select = window.document.getElementById('SelectId')
var valor = window.document.getElementById('NumeroId')
var area = window.document.getElementsByTagName('section')[0]
//var
function aperta() {
    area.style.border = null
    if (valor.value <= 0 || valor.value > 100 || Vresp.indexOf(Number(valor.value)) >= 0) {
        area.style.border = '2px solid red'
    } else {
        resp.innerHTML = ''
        let opção = document.createElement('option')
        opção.text = `Valor ${valor.value}`
        select.appendChild(opção)
        Vresp.push(Number(valor.value))
        select.setAttribute('size' , `${(Vresp.length)}`)
    }
    
}
function fim (){
    if (Number(Vresp.length != 0)) {
        let soma = 0
        let media = 0
        for(let pos in Vresp) {
            soma += Vresp[pos]
        }
        media = soma/Vresp.length
        area.style.border = null
        Vresp.sort()
        resp.innerHTML = ''
        resp.innerHTML += `Numeros Registrado ${Vresp.length} <br> O Maior Numero e ${Vresp[Vresp.length - 1]} <br> O Menor Numero e ${Vresp[0]} <br> A soma de Todos os Numeros e ${soma} <br> A media e ${media} `

    } else {
        area.style.border = '2px solid red'
    }

}