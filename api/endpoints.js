'use strict'

const baseUrl = 'http://localhost:8080/v1/nolance'
// usuários

export const getUsuarioById = async (id) =>{

    const url = `${baseUrl}/user/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.usuario[0]
}

export const getLogarUsuario = async (email, senha) =>{

    
    const url = `${baseUrl}/user?email=${email}&senha=${senha}`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()

    return data.usuario
}

export async function postUsuario (usuario) {
    const url = `${baseUrl}/users`
    const options = {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    }

    const response = await fetch(url, options)

    console.log(response.json())
    return response.ok
}

//lotes
export const getLoteById = async (id) =>{

    const url = `${baseUrl}/lote/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.lote
}

export const getArrematanteAtual = async (id) => {

    const url = `http://localhost:8080/v1/nolance/lance/arremate/lote/`+id
    const response = await fetch(url)
    const data = await response.json()
    return data.lance[0]
}


//leiloes
export const getLeilaoById = async (id) =>{

    const url = `${baseUrl}/leilao/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.leilao
}