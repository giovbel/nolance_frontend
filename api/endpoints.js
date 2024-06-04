'use strict'

const baseUrl = 'http://localhost:8080/v1/nolance'
// usuários

export const getUsuarioById = async (id) =>{

    const url = `${baseUrl}/usuario/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.usuario
}

export const getLogarUsuario = async (email, senha) =>{

    
    const url = `${baseUrl}/usuario?email=${email}&senha=${senha}`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()

    return data.usuario
}
