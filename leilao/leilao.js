'use strict'



const criarCardLote = () =>{
        const containerLOtes = document.getElementById('container-lotes')

        const card = document.createElement('div')
        card.className = 'h-[34.5vh] w-[12.5vw] border border-black  rounded-md pl-3 pt-2 grid'

        const numero = document.createElement('h3')
        numero.textContent = '01'

        const imagem = document.createElement('div')
        imagem.className = 'h-[12vh] w-[11vw] bg-cover bg-center'

        const titulo = document.createElement('h2')
        titulo.classList.add('text-xl')

        const dataTempo = document.createElement('div')
        const divData = document.createElement('div')
        divData.className = 'flex gap-1 items-center'
        const iconData = document.createElement('img')
        iconData.classList.add('h-5')
        const data = document.createElement('span')
        divData.replaceChildren(iconData, data)

        const divHorario = document.createElement('div')
        const iconHorario = document.createElement('img')
        const horario = document.createElement('span')
        divData.replaceChildren(iconHorario, horario)

        dataTempo.replaceChildren(divData, divHorario)

        const divStatus = document.createElement('div')
        

        card.replaceChildren(numero, imagem, titulo, dataTempo, divStatus)
}

const carregarLotes = () =>{

}