'use strict'

import { getLoteById, getArrematanteAtual, getUsuarioById } from "../api/endpoints.js"

const idLote = 1

const btnLance = document.getElementById('btn-lance')


const preencherInfoLote = async (lote) =>{


    const titulo = document.getElementById('nome-lote')
    const tempo = document.getElementById('tempo')
    const containerLance = document.getElementById('container-lance')
    const valorAtual = document.getElementById('lance-atual')
    const usuario = document.getElementById('usuario')
    const botaoLance = document.getElementById('btn-lance')
    const infoLeilao = document.getElementById('info-lote')
    let lanceAtual = await getArrematanteAtual(lote.id)

    titulo.textContent = lote.nome

    valorAtual.textContent = `R$${lanceAtual.valor.toFixed(2).replace('.', ',')}`
    let usuarioAtual = await getUsuarioById(lanceAtual.usuario_id)

    usuario.textContent = usuarioAtual.nome
}




const caregarInfoLote = async () =>{
    const lote = await getLoteById(idLote)
    preencherInfoLote(lote[0])
}
caregarInfoLote()