'use strict'

const baseUrl = 'http://localhost:8080/v1/nolance'
// usuários

export const getUsuarioById = async (id) =>{

    const url = `${baseUrl}/usuario/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.usuario
}

export const getLogarUsuario = async (id) =>{

    const url = `${baseUrl}/usuario?email=${email}&senha=${senha}`
    const response = await fetch(url)
    const data = await response.json()

    return data.usuario
}
