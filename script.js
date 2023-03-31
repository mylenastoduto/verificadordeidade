function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var gênero= ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <=3){
                //BEBE
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 10){
                img.setAttribute('src', 'criancamenino.png')
                //CRIANÇA
            } else if (idade <21){
                img.setAttribute('src', 'jovemhomem.png')
                //JOVEM
            } else if (idade < 50){
                img.setAttribute('src', 'homemadulto.png')
                //ADULTO
            } else {
                img.setAttribute('src', 'homemidoso.png')
                //IDOSO
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 3){
                img.setAttribute('src', 'bebemenina.png')
                //BEBE
            } else if (idade <10){
                img.setAttribute('src', criancamenina.png)
                //CRIANÇA
            } else if (idade <21){
                img.setAttribute('src', 'jovemmulher.png')
                //JOVEM
            } else if (idade < 50){
                img.setAttribute('src', 'mulheradulta.png')
                //ADULTO
            } else {
                img.setAttribute('src', 'mulheridosa.png')
                //IDOSO
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
    }

}
