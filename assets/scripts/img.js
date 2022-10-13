//lazer
var mapasIframe = document.querySelectorAll('.mapasImg1 iframe')
var mapasImg = document.querySelectorAll('.mapasImg1 img')
var btn = document.querySelector('.btn')

//ensino
var mapasIframe2 = document.querySelectorAll('.mapasImg2 iframe')
var mapasImg2 = document.querySelectorAll('.mapasImg2 img')
var btn2 = document.querySelector('.btn2')

//importantes
var mapasIframe3 = document.querySelectorAll('.mapasImg3 iframe')
var mapasImg3 = document.querySelectorAll('.mapasImg3 img')
var btn3 = document.querySelector('.btn3')

function mudarImg(){
    if (document.querySelector('.ativo') !== null){
        for(let i = 0; i < mapasIframe.length; i++){
            mapasImg[i].style.display = 'block'
            mapasIframe[i].style.display = 'none'
        }
        btn.textContent = 'mostrar mapas'
    }else{
        for(let i = 0; i < mapasIframe.length; i++){
            mapasImg[i].style.display = 'none'
            mapasIframe[i].style.display = 'block'
        }
        btn.textContent = 'mostrar imagens'
    }
    btn.classList.toggle('ativo')
}

function mudarImg2(){
    if (document.querySelector('.ativo2') !== null){
        for(let i = 0; i < mapasIframe2.length; i++){
            mapasImg2[i].style.display = 'block'
            mapasIframe2[i].style.display = 'none'
        }
        btn2.textContent = 'mostrar mapas'        
    }else{
        for(let i = 0; i < mapasIframe2.length; i++){
            mapasImg2[i].style.display = 'none'
            mapasIframe2[i].style.display = 'block'
        }
        btn2.textContent = 'mostrar imagens'
    }
    btn2.classList.toggle('ativo2')
}

function mudarImg3(){
    if (document.querySelector('.ativo3') !== null){
        for(let i = 0; i < mapasIframe3.length; i++){
            mapasImg3[i].style.display = 'block'
            mapasIframe3[i].style.display = 'none'
        }
        btn3.textContent = 'mostrar mapas'
    }else{
        for(let i = 0; i < mapasIframe3.length; i++){
            mapasImg3[i].style.display = 'none'
            mapasIframe3[i].style.display = 'block'
        }
        btn3.textContent = 'mostrar imagens'
    }
    btn3.classList.toggle('ativo3')
}