const body = document.querySelector('body')

const enviar = document.querySelector('enviar')
function confereSenha(){
    const senha = document.querySelector('input[name=senha]')
    const confimar = document.querySelector('input[name=confirmar]')

    if (confimar.value === senha.value){
        confimar.setCustomValidity('');
        ola()
    }else{
        confimar.setCustomValidity('As senhas não conferem')
    }
}
function ola(){
    const nome = document.querySelector('input[name=nome]')
    body.style.backgroundImage = 'url()'
    body.innerHTML = ""
    var h1 = document.createElement('h1')
    var div = document.createElement('div')
    div.classList.add('centralizar')
    h1.classList.add('textoApresentação')
    h1.style.transition = '1s all'
    h1.textContent = `Olá, ${nome.value}`
    div.appendChild(h1)
    body.appendChild(div)
    setTimeout(function(){
        body.innerHTML = ''
        var h1 = document.createElement('h1')
        var div = document.createElement('div')
        div.classList.add('centralizar')
        h1.classList.add('textoApresentação')
        h1.style.transition = '1s all'
        h1.textContent = `Bem vindo(a), ao site do bairro`
        div.appendChild(h1)
        body.appendChild(div)
        setTimeout(function(){
            open('home.html', '_self')
        }, 2000)
    }, 2000)    
}