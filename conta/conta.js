'use strict'

import { getArrematesUsuario, getUsuarioById } from '../api/endpoints.js'

const idUsuario = localStorage.getItem('idUsuario')
const usuario = await getUsuarioById(idUsuario)

const preencherInfoUsuario = async (usuario) =>{
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const telefone = document.getElementById('telefone')
    const endereco = document.getElementById('endereco')

    nome.textContent = usuario.nome
    email.textContent = usuario.email
    telefone.textContent = usuario.telefone
    endereco.textContent = usuario.endereco

}

const criarCardHistorico = async (leilao) =>{

    const card = document.createElement('div')
    card.classList.add('h-40', 'w-[14vw]', 'border', 'border-black',  'pt-3', 'pb-5', 'rounded-md', 'pl-5')
    const header = document.createElement('div')
    const imagem = document.createElement('div')
    imagem.classList.add('h-10', 'w-10', 'bg-black', 'bg-cover', 'bg-center')
    const data = docume.createElement('h2')
    data.classList.add('text-xl')
    data.textContent = leilao.data_lance
    header.replaceChildren(imagem, data)

    const info = document.createElement('div')
    info.classList.add('pt-2')
    const nome = document.createElement('span')
    nome.classList.add('text-lg')
    nome.textContent = 'Leilao'
    const arremate = document.createElement('span')
    arremate.classList.add('text-lg')
    arremate.textContent = 'Arrematante por'
    const valor = document.createElement('span')
    valor.classList.add('text-lg')
    valor.textContent = `R$${leilao.valor}`
    info.replaceChildren(nome, arremate, valor)

    card.replaceChildren(header, info)

    const divHistorico = document.getElementById('historico')
    divHistorico.appendChild(card)

}

const carregarHistorico = async () =>{
    const lotes = await getArrematesUsuario(idUsuario)
    lotes.forEach(lote  =>{
        criarCardHistorico(lote)
    })
}

carregarHistorico()
preencherInfoUsuario(usuario)