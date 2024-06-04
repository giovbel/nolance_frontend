'use strict'

const { getLogarUsuario } = require("../api/endpoints")

//tela de login e cadastro
const btnMudarSignUp = document.getElementById('botao-signup')
const btnMudarLogin = document.getElementById('botao-login')

const mudarParaCriarConta = () =>{

    const login = document.getElementById('container-login')
    const signup =document.getElementById('container-signup')
    let width = login.offsetWidth
    login.style.transform = `translateX(-${width}px)`
    signup.style.transform = `translateX(-${width}px)`

}
const mudarParaLogar = () =>{

    const login = document.getElementById('container-login')
    const signup =document.getElementById('container-signup')
    let width = login.offsetWidth /300
    login.style.transform = `translateX(${width}px)`
    signup.style.transform = `translateX(${width}px)`

}

btnMudarSignUp.addEventListener('click', mudarParaCriarConta)
btnMudarLogin.addEventListener('click', mudarParaLogar)

//login

const btnSignUp = document.getElementById('botao-cadastrar')
const btnLogin = document.getElementById('botao-logar')


const logar = async () =>{

    const usuario = await getLogarUsuario()
    
}