window.document.getElementsByTagName('button')[0].addEventListener('click' , Botão)
function Botão() {
    let resp = window.document.getElementById('resp')
    let cont = window.document.getElementById('cont')
    let valor = window.document.getElementById('Tabuada')
    window.document.getElementById('idarea').innerHTML = null
    window.document.getElementById('idarea').setAttribute('size', '1')
    window.document.getElementsByTagName('p')[1].innerHTML = null
    window.document.getElementsByTagName('section')[0].style.border = null
    if (valor.value.length == 0) {
        window.document.getElementsByTagName('p')[1].innerHTML = 'Erro Falta Informação'
        window.document.getElementsByTagName('section')[0].style.border = '2px solid red'

    } else {
        window.document.getElementById('idarea').setAttribute('size', '10')
        let Nvalor = Number(valor.value)
        for(c = Number(1);c != 11;c ++) {
            let tag = document.createElement('option')
            tag.text = `${c} x ${Nvalor} = ${Nvalor * c} `
            window.document.getElementById('idarea').appendChild(tag)
        }
    }
}