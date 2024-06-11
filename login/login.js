'use strict'

import { getLogarUsuario, postUsuario } from "../../api/endpoints.js"

//tela de login e cadastro
const btnMudarSignUp = document.getElementById('botao-signup')
const btnMudarLogin = document.getElementById('botao-login')

const mudarParaCriarConta = () =>{

    const login = document.getElementById('container-login')
    const signup =document.getElementById('container-signup')
    const logo =document.getElementById('logo')
    let width = login.offsetWidth
    login.style.transform = `translateX(-${width}px)`
    signup.style.transform = `translateX(-${width}px)`
    logo.style.transform = `translateX(-${width + (width/4)}px)`

}
const mudarParaLogar = () =>{

    const login = document.getElementById('container-login')
    const signup =document.getElementById('container-signup')
    const logo =document.getElementById('logo')
    let width = login.offsetWidth / 300
    login.style.transform = `translateX(${width}px)`
    signup.style.transform = `translateX(${width}px)`
    logo.style.transform = `translateX(${width + (width/4)}px)`

}

btnMudarSignUp.addEventListener('click', mudarParaCriarConta)
btnMudarLogin.addEventListener('click', mudarParaLogar)

//login

const btnSignUp = document.getElementById('botao-cadastrar')
const btnLogin = document.getElementById('botao-logar')


const logar = async () =>{

    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    
    console.log(email.value, senha.value)
    const usuario = await getLogarUsuario(email.value, senha.value)


    if(usuario){
        window.location.assign('../home.html')
    }else{
        alert('usuário ou senha incorretos')
    }
    
}


const cadastrar = async () =>{

    let email = document.getElementById('criar-email').value
    let senha = document.getElementById('criar-senha').value
    let nome = document.getElementById('criar-nome').value
    let telefone = document.getElementById('criar-telefone').value
    let cpf = document.getElementById('criar-cpf').value
    let dataNascimento = document.getElementById('criar-nascimento').value
    let cep = document.getElementById('criar-cep').value
    let numero = document.getElementById('criar-numero').value

    let novoUsuario = {
        "nome": nome,
        "email": email,
        "senha": senha,
        "telefone": telefone,
        "icone": "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg",
        "data_nascimento": dataNascimento,
        "cpf": cpf,
        "cep": cep,
        "numero": numero
    }

    let postNovoUsuario = await postUsuario(novoUsuario)
    console.log(postNovoUsuario)
    if(postNovoUsuario){
        alert('conta criada com sucesso')
        window.location.reload()
    }

}

btnSignUp.addEventListener('click', cadastrar())
btnLogin.addEventListener('click', logar())

