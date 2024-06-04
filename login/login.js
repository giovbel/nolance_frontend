'use strict'

import { getLogarUsuario } from "../../api/endpoints.js"

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
    let width = login.offsetWidth / 300
    login.style.transform = `translateX(${width}px)`
    signup.style.transform = `translateX(${width}px)`

}

btnMudarSignUp.addEventListener('click', mudarParaCriarConta)
btnMudarLogin.addEventListener('click', mudarParaLogar)

//login

const btnSignUp = document.getElementById('botao-cadastrar')
const btnLogin = document.getElementById('botao-logar')


const logar = async () =>{

    const email = document.getElementById('input-email').value
    const senha = document.getElementById('input-senha').value
    console.log(email,senha)
    const usuario = await getLogarUsuario(email, senha)

    if(usuario){
        window.location.assign('../home.html')
    }else{
        alert('usuário ou senha incorretos')
    }
    
}

btnLogin.addEventListener('click', logar)