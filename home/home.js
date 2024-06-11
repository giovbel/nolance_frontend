'use strict'

const criarCardLeilao = async (leilao)=>{
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
        lotes.textContent = '7 lotes';
        secondSectionInnerDiv.appendChild(lotes);
    
        const separator = document.createElement('p');
        separator.classList.add('text-xs', 'text-[#766F6F]');
        separator.textContent = '|';
        secondSectionInnerDiv.appendChild(separator);
    
        const date = document.createElement('span');
        date.classList.add('text-xs', 'text-[#766F6F]');
        date.textContent = '10/10/2024';
        secondSectionInnerDiv.appendChild(date);
    
        infoLeilao.appendChild();
    
        const categories = document.createElement('p');
        categories.classList.add('text-xs', 'text-[#766F6F]');
        categories.textContent = 'Antiguidade, Moeda, Mundo, Categoria1';
        infoLeilao.appendChild(categories);

        const greenBar = document.createElement('div');
        greenBar.classList.add('h-5', 'w-52', 'bg-[#328336]', 'rounded-md', 'border', 'border-black');
        containerInfo.replaceChildren(containerTitulo, secondSectionInnerDiv, infoLeilao, greenBar);
    
        container.replaceChildren(imagem, containerInfo);
    
    
    
}


const carregarLeiloes = async () => {

}