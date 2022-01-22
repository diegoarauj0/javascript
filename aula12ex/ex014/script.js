var texto = window.document.getElementById('texto')
var foto = window.document.getElementById('foto')
var img = window.document.getElementById('img')
var hora = new Date().getHours()
texto.innerHTML = hora
if (hora >= 0 && hora < 12) {
    texto.innerHTML = 'Bom dia'
    texto.style.color = 'mediumturquoise'
    img.src = 'img/Dia.png'
    img.alt = 'dia'
    window.document.body.style.backgroundColor = 'mediumturquoise'


} else if (hora >= 12 && hora < 18 ){
    texto.innerHTML = 'Boa Tarde'
    texto.style.color = 'orange'
    img.src = 'img/Tarde.png'
    img.alt = 'tarde'
    window.document.body.style.backgroundColor = 'orange'

} else {
    texto.innerHTML = 'Boa noite'
    texto.style.color = 'slategray'
    img.src = 'img/Noite.png'
    img.alt = 'noite'
    window.document.body.style.backgroundColor = 'slategray'

}