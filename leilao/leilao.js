'use strict'

import { getCategoriaById, getLeilaoById, getLotesLeilao } from '../api/endpoints.js'

// const idLeilao = localStorage.getItem('idleilao')
const idLeilao = localStorage.getItem('idLeilao')
const leilao = await getLeilaoById(idLeilao)

const categoria = await getCategoriaById(leilao.categoria_id[0].id)

const tituloLeilao  = document.getElementById('titulo')
tituloLeilao.textContent = leilao.nome
const quantidadeLotes  = document.getElementById('quantidade')


const criarCardLote = (lote, number) =>{
        const containerLotes = document.getElementById('container-lotes')

        const card = document.createElement('div')
        card.className = 'h-[34.5vh] w-[12.5vw] border border-black  rounded-md pl-3 pt-2 grid'

        const numero = document.createElement('h3')
        numero.classList.add('w-full', 'text-right', 'px-4')
        numero.textContent = number

        const imagem = document.createElement('div')
        imagem.className = 'h-[12vh] w-[11vw] bg-cover bg-center'

        imagem.style.background = `url('../img/not_found.png')`

        const titulo = document.createElement('h2')
        titulo.classList.add('text-xl')
        titulo.textContent = lote.nome

        const dataTempo = document.createElement('div')

        const divData = document.createElement('div')
        divData.className = 'flex gap-1 items-center text-gray-500'
        const iconData = document.createElement('img')
        iconData.classList.add('h-5')
        iconData.src = `../img/lets-icons_date-fill.png`
        const data = document.createElement('span')
        data.textContent = lote.data_inicio.split('T')[0].split('-').reverse().join('/')
        divData.replaceChildren(iconData, data)

        const divHorario = document.createElement('div')
        divHorario.className = 'flex gap-1 items-center text-gray-500'
        const iconHorario = document.createElement('img')
        iconHorario.src = `../img/ri_time-fill.png`
        const horario = document.createElement('span')
        horario.textContent = lote.data_inicio.split('T')[1].split('.')[0] + 'h'
        divHorario.replaceChildren(iconHorario, horario)

        dataTempo.replaceChildren(divData, divHorario)

        const divStatus = document.createElement('div')
        divStatus.className = 'h-9 w-[11vw] rounded-md text-white flex items-center text-center border border-black justify-center'
        divStatus.textContent = lote.status[0].nome
        divStatus.style.backgroundColor = lote.status[0].cor

        card.replaceChildren(numero, imagem, titulo, dataTempo, divStatus)

        card.addEventListener('click', () =>{
                localStorage.setItem('idLote', lote.id)
                window.location.assign('../lote/lote.html')
        })

        containerLotes.appendChild(card)
}

const carregarLotes = async () =>{

        const lotes = await getLotesLeilao(idLeilao)
         quantidadeLotes.textContent = lotes.qntd_lotes + ' lotes'
         
        lotes.lotes.forEach(lote =>{
                let number = lotes.lotes.indexOf(lote) +1
                criarCardLote(lote, number)
        })
        pesquisarLotes(lotes.lotes)
}

carregarLotes()

const pesquisarLotes = async (lotes) =>{

        const searchInput = document.getElementById('barra-pesquisa')
      
        searchInput.onkeyup = function(){

        let valorInput = searchInput.value
        
            if(valorInput.length){
                lotes.forEach(lote => {
                if(lote.nome.toLowerCase().includes(valorInput.toLowerCase()) && valorInput != "" ){
                    lotesContainer.innerHTML = '';
                    criarCardLote(lote)
                }
            })
            }else{
                lotesContainer.innerHTML = '';
                carregarLotes()
            }      

    }

}

