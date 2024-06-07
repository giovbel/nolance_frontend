'use strict'

import { getLoteById, getArrematanteAtual, getUsuarioById, getLeilaoById } from "../api/endpoints.js"

const idLote = 1

const btnLance = document.getElementById('btn-lance')


const preencherInfoLote = async (lote) => {

    let leilao = await getLeilaoById(lote.leilao)

    const titulo = document.getElementById('nome-lote')
    const tempo = document.getElementById('tempo')
    const containerLance = document.getElementById('container-lance')
    const valorAtual = document.getElementById('lance-atual')
    const usuario = document.getElementById('usuario')
    const botaoLance = document.getElementById('btn-lance')
    const infoLote = document.getElementById('info-lote')
    const imgSelecionada = document.getElementById('img-selecionada')

    let lanceAtual = await getArrematanteAtual(lote.id)

    titulo.textContent = lote.nome
    valorAtual.textContent = `R$${lanceAtual.valor.toFixed(2).replace('.', ',')}`

    let usuarioAtual = await getUsuarioById(lanceAtual.usuario_id)
    usuario.textContent = usuarioAtual.nome

    //criar a descrição do lote

    const infoTitulo = document.createElement('h3');
    infoTitulo.classList.add('text-2xl');
    infoTitulo.textContent = lote.nome;

    const descricaoDiv = document.createElement('div');
    const descricaoTitulo = document.createElement('h3');
    descricaoTitulo.classList.add('text-2xl');
    descricaoTitulo.textContent = 'Descrição';
    const descricao = document.createElement('p');
    descricao.classList.add('text-xl');
    descricao.textContent = lote.descricao;
    descricaoDiv.replaceChildren(descricaoTitulo, descricao);

    const modalidadeDiv = document.createElement('div');
    const modalidadeTitulo = document.createElement('h3');
    modalidadeTitulo.classList.add('text-2xl');
    modalidadeTitulo.textContent = 'Modalidade';
    const modalidadeTexto = document.createElement('p');
    modalidadeTexto.classList.add('text-xl');
    modalidadeTexto.textContent = leilao[0].modalidade_id[0].nome;
    modalidadeDiv.replaceChildren(modalidadeTitulo, modalidadeTexto);

    const retiradaDiv = document.createElement('div');
    const retiradaTitulo = document.createElement('h3');
    retiradaTitulo.classList.add('text-2xl');
    retiradaTitulo.textContent = 'Retirada';
    const retiradaTexto = document.createElement('p');
    retiradaTexto.classList.add('text-xl');
    retiradaTexto.innerHTML = leilao[0].retirada;
    const contato = document.createElement('p');
    contato.classList.add('text-xl', 'pt-6');
    contato.textContent = `Contato: ${leilao[0].comitente_id[0].nome}, ${leilao[0].comitente_id[0].telefone}`;
    retiradaDiv.replaceChildren(retiradaTitulo, retiradaTexto, contato);

    infoLote.replaceChildren(infoTitulo, descricaoDiv, modalidadeDiv, retiradaDiv);


    //preencher as imagens do lote
    const images = document.querySelectorAll('.image')
    for (let i = 0; i < lote.imagens.length; i++) {
        images[i].style.backgroundImage = `url('${lote.imagens[i].url}')`
        images[i].addEventListener('click', () => {
            imgSelecionada.style.backgroundImage = `url('${lote.imagens[i].url}')`
        }
        )
    }
    imgSelecionada.style.backgroundImage = `url('${lote.imagens[0].url}')`

    let leilaoDoLote = document.getElementById('leilao-lote')
    let imagemLeilao = document.getElementById('leilao-lote-imagem')
    leilaoDoLote.textContent = leilao[0].nome
    imagemLeilao.style.backgroundImage =`url('${leilao[0].imagem}')`

}




const caregarInfoLote = async () => {
    const lote = await getLoteById(idLote)
    preencherInfoLote(lote[0])
}
caregarInfoLote()