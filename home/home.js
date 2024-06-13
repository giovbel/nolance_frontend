'use strict'

import { getLeiloes } from "../api/endpoints.js";
import { getListarLotes } from "../api/endpoints.js";

const botoes = document.getElementById('sign-buttons')
const botoesUsuario = document.getElementById('user-buttons')
if(localStorage.getItem('idUsuario')!= 0 && localStorage.getItem('idUsuario') != null ){
        console.log(localStorage.getItem('idUsuario'))
        botoes.classList.add('hidden')
        botoesUsuario.classList.remove('hidden')
}

async function carregarLeiloes() {
        const leiloes = await getLeiloes()
        const div = document.getElementById('div')
        leiloes.forEach(async leilao => {
                let card = await criarCardLeilao(leilao)
                div.appendChild(card)
        });
}

const criarCardLeilao = async (leilao) => {
        const container = document.createElement('div');
        container.classList.add('h-[37vh]', 'w-[12.5vw]', 'border', 'border-black', 'rounded-md', 'grid', 'items-center', 'pl-3');

        const imagem = document.createElement('img');
        imagem.src = leilao.foto_capa;
        imagem.alt = 'Imagem de capa do leilão';
        imagem.classList.add('object-cover', 'h-[15vh]', 'w-[11vw]', 'rounded-md', 'bg-[../img/not_found.png]');
        imagem.addEventListener("error", function(event) {
                event.target.src = "../img/not_found.png"
                event.onerror = null
              })

        const containerInfo = document.createElement('div');
        containerInfo.classList.add('grid', 'gap-5');

        const containerTitulo = document.createElement('div');
        containerTitulo.classList.add('flex', 'items-center');

        const titulo = document.createElement('h2');
        titulo.classList.add('text-lg', 'relative', 'top-2', 'w-[10vw]');
        titulo.textContent = leilao.nome;

        const iconeModalidade = document.createElement('img');
        iconeModalidade.classList.add('h-6');
        iconeModalidade.src = '../img/online.png';
        iconeModalidade.alt = leilao.modalidade[0].nome;
        containerTitulo.replaceChildren(titulo, iconeModalidade);

        const infoLeilao = document.createElement('div');

        const secondSectionInnerDiv = document.createElement('div');
        secondSectionInnerDiv.classList.add('flex', 'gap-1');

        const lotes = document.createElement('p');
        lotes.classList.add('text-xs', 'text-[#766F6F]');
        lotes.textContent = leilao.lotes.length + ' lotes';
        secondSectionInnerDiv.appendChild(lotes);

        const separator = document.createElement('p');
        separator.classList.add('text-xs', 'text-[#766F6F]');
        separator.textContent = '|';
        secondSectionInnerDiv.appendChild(separator);

        const data = document.createElement('span');
        data.classList.add('text-xs', 'text-[#766F6F]');
        data.textContent = leilao.data_inicio.split('T')[0].split('-').reverse().join('/')
        secondSectionInnerDiv.appendChild(data);



        const categorias = document.createElement('p');
        categorias.classList.add('text-xs', 'text-[#766F6F]');
        categorias.textContent = leilao.categoria[0].nome;
        infoLeilao.appendChild(categorias);

        const greenBar = document.createElement('div');
        greenBar.classList.add('h-5', 'w-52', 'bg-[#328336]', 'rounded-md', 'border', 'border-black');
        containerInfo.replaceChildren(containerTitulo, secondSectionInnerDiv, infoLeilao, greenBar);

        container.replaceChildren(imagem, containerInfo);

        container.addEventListener('click', () =>{
                localStorage.setItem('idLeilao', leilao.id)
                window.location.assign('../leilao/lotesDoLeilao.html')
        })

        return container
}
await carregarLeiloes()

//////////////////////////////LOTES////////////////////////////////////

async function carregarLotes() {

        const lotes = await getListarLotes()
        console.log(lotes)
        lotes.forEach(lote => {
                criarCardLote(lote)
        });
        
}

const criarCardLote = (lote, number) => {
        const container = document.createElement('div');
        container.classList.add('h-[34.5vh]', 'w-[12.5vw]', 'border', 'border-black', 'rounded-md', 'pl-3', 'pt-2', 'grid');

        const h1 = document.createElement('h1');
        h1.textContent = lote.id;

        const imagem = document.createElement('div');
        imagem.style.backgroundImage = "url('../img/not_found.png')";
        imagem.classList.add('h-[12vh]', 'w-[11vw]', 'bg-cover', 'bg-center');


        const h2 = document.createElement('h2');
        h2.classList.add('text-xl');
        h2.textContent = lote.nome;

        const infoContainer = document.createElement('div');

        const dataInfo = document.createElement('div');
        dataInfo.classList.add('flex', 'gap-1', 'items-center');
        const dataImg = document.createElement('img');
        dataImg.classList.add('h-5');
        dataImg.src = "../img/lets-icons_date-fill.png";
        dataImg.alt = "";
        const dataP = document.createElement('p');
        dataP.textContent = lote.data_inicio.split('T')[0].split('-').reverse().join('/');
        dataInfo.appendChild(dataImg);
        dataInfo.appendChild(dataP);

        const horarioInfo = document.createElement('div');
        horarioInfo.classList.add('flex', 'gap-1', 'items-center');
        const horarioImg = document.createElement('img');
        horarioImg.classList.add('h-5');
        horarioImg.src = "../img/ri_time-fill.png";

        const horarioP = document.createElement('p');
        horarioP.textContent = "09:00h";
        horarioInfo.appendChild(horarioImg);
        horarioInfo.appendChild(horarioP);

        const statusContainer = document.createElement('div');
        statusContainer.classList.add('h-9', 'w-[11vw]', 'rounded-sm', 'flex', 'items-center', 'justify-center', `bg-[${lote.status[0].cor.replace('\t', '')}]`);
        const statusH1 = document.createElement('h1');
        statusH1.classList.add('text-white');
        statusH1.textContent = lote.status[0].nome;
        statusContainer.appendChild(statusH1);

        infoContainer.replaceChildren(dataInfo, horarioInfo);

        container.appendChild(h1);
        container.appendChild(imagem);
        container.appendChild(h2);
        container.appendChild(infoContainer);
        container.appendChild(statusContainer);

        const div = document.getElementById('interesses')
        div.appendChild(container)
        div.addEventListener('click', () =>{
                localStorage.setItem('idLote', lote.id)
                window.location.assign('../lote/lote.html')
        })

};

await carregarLotes()

//////////////////////////////////////////////////////////////////

async function carregarLeiloesAcabando() {

        const leiloes = await getLeiloes()
        const acabando = document.getElementById('acabando')
        leiloes.forEach(async leilao => {
                let card = await criarCardLeilao(leilao)

                acabando.appendChild(card)
        });
}
await carregarLeiloesAcabando()