var hora = new Date().getHours()
if (hora < 12){
    console.log('Bom dia')
}else {
    if (hora <= 18) {
        console.log('boa tarde')
    }else  {
        console.log('Boa Noite')
    }
}