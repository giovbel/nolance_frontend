'use strict'

const baseUrl = 'http://localhost:8080/v1/nolance'
// const baseUrl = 'https://nolance-backend.onrender.com/v1/nolance'
// usuários


export const getUsuarioById = async (id) => {

    const url = `${baseUrl}/user/${id}`
    
    const response = await fetch(url)
    const data = await response.json()

    return data.usuario[0]
}

export const getLogarUsuario = async (email, senha) => {


    const url = `${baseUrl}/user?email=${email}&senha=${senha}`
<<<<<<< HEAD
    const response = await fetch(url)
=======
<<<<<<< main
    const response = await fetch(url)
=======
    const response = await fetch(url, optionsGet)
>>>>>>> main
>>>>>>> 76f54e99b9681c47c47c5e3096147628346f2d53
    const data = await response.json()

    return data.usuario
}

export async function postUsuario(usuario) {
    const url = `${baseUrl}/users`
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario)
    }

    const response = await fetch(url, options)

    return response.json()
}

//interesses

export const getInteressesByUser = async (id) => {
    const url = `${baseUrl}/interessesUsuario/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.interesses
}

//lotes
export const getLoteById = async (id) => {

    const url = `${baseUrl}/lote/${id}`
    const response = await fetch(url);
    const data = await response.json()

    return data.lote
}
export const getListarLotes = async () => {

    const url = `${baseUrl}/lotes`
    const response = await fetch(url);
    const data = await response.json()

    return data.lotes
}

export const getArrematanteAtual = async (id) => {

    const url = `${baseUrl}/lance/arremate/lote/` + id
<<<<<<< HEAD
    const response = await fetch(url)
=======
<<<<<<< main
    const response = await fetch(url)
=======
    const response = await fetch(url, optionsGet)
>>>>>>> main
>>>>>>> 76f54e99b9681c47c47c5e3096147628346f2d53
    const data = await response.json()

    if (data.status_code == 404) {
        return false
    } else {
        return data.lance[0]
    }
}

export async function postLance(lance) {
    const url = `${baseUrl}/lance`
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lance)
    }
    const response = await fetch(url, options)

    return response.ok
}

export const getArrematesUsuario = async (id) => {

    const url = `${baseUrl}/arremate/usuario/` + id
    const response = await fetch(url)
    const data = await response.json()

    if (data.status_code == 404) {
        return false
    } else {
        return data.lances
    }
}


//leiloes
export const getLeilaoById = async (id) => {

    const url = `${baseUrl}/leilao/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.leilao[0]
}
export const getLeiloes = async () => {

    const url = `${baseUrl}/leiloes/`
    const response = await fetch(url)
    const data = await response.json()

    return data.leiloes
}

export const getLotesLeilao = async (id) => {

    const url = `${baseUrl}/leilao/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

//categorias
export const getCategorias = async () => {
<<<<<<< main


    const url = `${baseUrl}/categorias`
    const response = await fetch(url)
    const data = await response.json()
       
    return data.categorias
}

export const updateCategoria = async (id, categoria) => {
    const url = `${baseUrl}/categoria/${id}`
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
    })

    return response.ok
=======


    const url = `${baseUrl}/categorias`
    const response = await fetch(url)
    const data = await response.json()
       
    return data.categorias
>>>>>>> main
}