'use strict'

import { getLeiloes } from "../api/endpoints.js";
import { getListarLotes } from "../api/endpoints.js";

async function carregarLeiloes() {
        const leiloes = await getLeiloes()
        const div = document.getElementById('div')
        leiloes.forEach(leilao => {
                let card = criarCardLeilao(leilao)
                console.log(card)
                div.appendChild(card)
        });
}

const criarCardLeilao = async (leilao) => {
        const container = document.createElement('div');
        container.classList.add('h-[37vh]', 'w-[12.5vw]', 'border', 'border-black', 'rounded-md', 'grid', 'items-center', 'pl-3');

        const imagem = document.createElement('img');
        imagem.src = leilao.foto_capa;
        imagem.alt = 'Imagem de capa do leilão';
        imagem.classList.add('object-cover', 'h-[15vh]', 'w-[11vw]', 'rounded-md', 'bg-black');

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

        const date = document.createElement('span');
        date.classList.add('text-xs', 'text-[#766F6F]');
        date.textContent = leilao.data_inicio.split('T')[0].split('-').reverse().join('/')
        secondSectionInnerDiv.appendChild(date);



        const categories = document.createElement('p');
        categories.classList.add('text-xs', 'text-[#766F6F]');
        categories.textContent = leilao.categoria[0].nome;
        infoLeilao.appendChild(categories);

        const greenBar = document.createElement('div');
        greenBar.classList.add('h-5', 'w-52', 'bg-[#328336]', 'rounded-md', 'border', 'border-black');
        containerInfo.replaceChildren(containerTitulo, secondSectionInnerDiv, infoLeilao, greenBar);

        container.replaceChildren(imagem, containerInfo);

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

const criarCardLote = (lote) => {
        const container = document.createElement('div');
        container.classList.add('h-[34.5vh]', 'w-[12.5vw]', 'border', 'border-black', 'rounded-md', 'pl-3', 'pt-2', 'grid');

        const h1 = document.createElement('h1');
        h1.textContent = lote.id;

        const imagem = document.createElement('div');
        imagem.src = lote.imagem;
        imagem.classList.add('h-[12vh]', 'w-[11vw]', 'bg-cover', 'bg-center');


        const h2 = document.createElement('h2');
        h2.classList.add('text-xl');
        h2.textContent = lote.nome;

        const infoContainer = document.createElement('div');

        const dateInfo = document.createElement('div');
        dateInfo.classList.add('flex', 'gap-1', 'items-center');
        const dateImg = document.createElement('img');
        dateImg.classList.add('h-5');
        dateImg.src = "../img/lets-icons_date-fill.png";
        dateImg.alt = "";
        const dateP = document.createElement('p');
        dateP.textContent = lote.data_inicio.split('T')[0].split('-').reverse().join('/');
        dateInfo.appendChild(dateImg);
        dateInfo.appendChild(dateP);

        const timeInfo = document.createElement('div');
        timeInfo.classList.add('flex', 'gap-1', 'items-center');
        const timeImg = document.createElement('img');
        timeImg.classList.add('h-5');
        timeImg.src = "../img/ri_time-fill.png";

        const timeP = document.createElement('p');
        timeP.textContent = "09:00h";
        timeInfo.appendChild(timeImg);
        timeInfo.appendChild(timeP);

        const statusContainer = document.createElement('div');
        statusContainer.classList.add('h-9', 'w-[11vw]', 'rounded-sm', 'flex', 'items-center', 'justify-center', 'bg-[#328336]');
        const statusH1 = document.createElement('h1');
        statusH1.classList.add('text-white');
        statusH1.textContent = lote.status[0].nome;
        statusContainer.appendChild(statusH1);

        infoContainer.appendChild(dateInfo);
        infoContainer.appendChild(timeInfo);

        container.appendChild(h1);
        container.appendChild(imagem);
        container.appendChild(h2);
        container.appendChild(infoContainer);
        container.appendChild(statusContainer);

        const div = document.getElementById('interesses')
        div.appendChild(container)


};

await carregarLotes()

//////////////////////////////////////////////////////////////////

async function carregarLeiloesAcabando() {

        const leiloes = await getLeiloes()
        const acabando = document.getElementById('acabando')
        leiloes.forEach(leilao => {
                let card = criarCardLeilao(leilao)

                acabando.appendChild(card)
        });
}
await carregarLeiloesAcabando()