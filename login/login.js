'use strict'
const btnSignUp = document.getElementById('botao-signup')
const btnLogin = document.getElementById('botao-login')

const mudarParaCriarConta = () =>{

    const login = document.getElementById('container-login')
    const signup =document.getElementById('container-signup')
    let width = login.offsetWidth
    console.log(width)
    login.style.transform = `translateX(-${width}px)`
    signup.style.transform = `translateX(-${width}px)`

}
const mudarParaLogar = () =>{

    const login = document.getElementById('container-login')
    const signup =document.getElementById('container-signup')
    let width = login.offsetWidth
    console.log(width)
    login.style.transform = `translateX(${width}px)`
    signup.style.transform = `translateX(${width}px)`

}

btnSignUp.addEventListener('click', mudarParaCriarConta)
btnLogin.addEventListener('click', mudarParaLogar)