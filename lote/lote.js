'use strict'

import { getLoteById, getArrematanteAtual, getUsuarioById, getLeilaoById, postLance } from "../api/endpoints.js"

const idLote = 11

const botaoLance = document.getElementById('btn-lance')
const containerLance = document.getElementById('container-lance')
const containerLanceClicado = document.getElementById('container-lance-clicado')

const preencherInfoLote = async (lote) => {

    let leilao = await getLeilaoById(lote.leilao)

    const titulo = document.getElementById('nome-lote')
    const valorAtual = document.getElementById('lance-atual')
    const usuario = document.getElementById('usuario')
    const infoLote = document.getElementById('info-lote')
    const imgSelecionada = document.getElementById('img-selecionada')
    const status = document.getElementById('status')
    status.textContent = lote.status[0].nome
    status.classList.add(`bg-[${lote.status[0].cor.replace("\t", "")}]`)

    let lanceAtual = await getArrematanteAtual(lote.id)
    const valorAtualClicado = document.getElementById('lance-atual-clicado')
    const usuarioClicado = document.getElementById('usuario-clicado')
    const inputValor = document.getElementById('input-valor')
    const botaoLanceConfirmar = document.getElementById('btn-lance-confirmar')

    if(lanceAtual){
        let usuarioAtual = await getUsuarioById(lanceAtual.usuario_id)
        usuario.textContent = usuarioAtual.nome
        valorAtualClicado.textContent = `R$${lanceAtual.valor.toFixed(2).replace('.', ',')}`
        usuarioClicado.textContent = `Último lance: ${usuarioAtual.nome}`
        inputValor.value = lanceAtual.valor.toFixed(2) + 1

        valorAtual.textContent = `R$${lanceAtual.valor.toFixed(2).replace('.', ',')}`
    }else{
        valorAtual.textContent =`R$00,00`
    }

    titulo.textContent = lote.nome
    



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
    if(lote.imagens.length > 0)
    imgSelecionada.style.backgroundImage = `url('${lote.imagens[0].url}')`

    let leilaoDoLote = document.getElementById('leilao-lote')
    let imagemLeilao = document.getElementById('leilao-lote-imagem')
    leilaoDoLote.textContent = leilao[0].nome
    imagemLeilao.style.backgroundImage = `url('${leilao[0].imagem}')`


    //aparecer o 'Dar lance'


    botaoLance.addEventListener('click', () =>{

        containerLance.classList.add('hidden')
        containerLanceClicado.classList.remove('hidden')
    })
    
    botaoLanceConfirmar.addEventListener('click', async () =>{

            const date = new Date().toLocaleDateString().split('/').reverse().join('-');
            
            let lanceJSON = {
                "data_lance": date,
                "valor": Number(inputValor.value),
                "lote": lote.id,
                "usuario": 1
            }
        
        await postLance(lanceJSON)
        containerLance.classList.remove('hidden')
        containerLanceClicado.classList.add('hidden')
    })

}

const lote = await getLoteById(idLote)
preencherInfoLote(lote[0])
const updateCountdown = async () => {
    let leilao = await getLeilaoById(lote[0].leilao)
    const dataAtual = new Date()
    const dataFinal = new Date(`${leilao[0].data_final}`)
    const tempoRestante = countdown(dataAtual, dataFinal);
    const tempo = document.getElementById('tempo')
    const lanceFinal = document.getElementById('lance-final')

    if(dataFinal.getTime() < dataAtual.getTime()){
        tempo.textContent = '00:00:00'
        tempo.classList.add('text-red-500', 'border-red-500')
        botaoLance.classList.add('hidden')
        lanceFinal.classList.remove('hidden')
    }else{
        if(tempoRestante.seconds == 10)
            tempo.classList.add('border-red-500')
        else
        tempo.classList.add('border-green-500')
        
        tempo.textContent = `${tempoRestante.hours}:${tempoRestante.minutes}:${tempoRestante.seconds}`

    }
}
setInterval(updateCountdown, 1000);
