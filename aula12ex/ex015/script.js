window.document.getElementsByTagName('input')[3].addEventListener('click' , clicar)

function clicar() {
    window.document.getElementById('res').style.textAlign = 'center'
    window.document.getElementsByTagName('img')[0].style.margin = '10px'
    window.document.getElementById('imagem').style.textAlign = 'center'
    resp = window.document.getElementById('ano')
    ano = new Date().getFullYear()
    if (resp.value.length == 0 || resp.value > ano) {
        window.alert('Numero inválido')
        window.document.getElementById('res').innerText = (`...`)
        imagem.src = ''
    } else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(resp.value)
        var gênero = ''
        var imagem = window.document.getElementsByTagName('img')[0]
        if (fsex[0].checked) {
            gênero = 'Masculino♂' 
            if (idade >= 0 && idade < 10) {
                imagem.src = 'img/criançaM.png'
            } else if (idade >= 10 && idade < 21) {
                imagem.src = 'img/jovemM.png'
            } else if (idade >= 21 && idade < 40) {
                imagem.src = 'img/adultoM.png'
            } else {
                imagem.src = 'img/senhorM.png'
            }
        } else if (fsex[1].checked) {
            gênero = 'Feminino♀'
            if (idade >= 0 && idade < 10) {
                imagem.src = 'img/criançaF.png'
            } else if (idade >= 10 && idade < 21) {
                imagem.src = 'img/jovemF.png'
            } else if (idade >= 21 && idade < 40) {
                imagem.src = 'img/adultoF.png'
            } else {
                imagem.src = 'img/senhoraF.png'
            }
        }
        window.document.getElementById('res').innerHTML = `Gênero ${gênero} idade ${idade}`
    }
}