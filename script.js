function escolha(objet){
    x = document.getElementsByClassName('escolhido')
    if (x.length < 1){
        objet.classList.add('escolhido')

    } else if (x.length === 1) {
        if (x[0] != objet){
        x[0].classList.remove('escolhido')
        objet.classList.add('escolhido')
        } else {
            x[0].classList.remove('escolhido')
        }
    } 
}
//    

function submit(nota) {
    try {
        msg = document.getElementById('nota')
        msg.innerHTML = `You selected ${nota.id} out of 5`
        x = document.getElementById('conteudo-1')
        y = document.getElementById('conteudo-2')
        x.classList.add('visually-hidden')
        y.classList.remove('visually-hidden')
    } catch(e) {
        alert('escolha uma nota')
    }
    
} 