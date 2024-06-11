'use strict'

import { getCategorias} from "../api/endpoints.js";

async function carregarCategorias(){

const main = document.getElementById('main')


const categorias = await getCategorias()
const interesses = []

categorias.forEach(interesse => {
    
    const divInteresse = document.createElement('div');
    divInteresse.classList.add('h-40', 'w-40', 'bg-gradient-to-b', 'from-opacity-45', 'from-[#A7CAA8]', 'shadow-lg', 'to-[#dffce1]', 'rounded-t-lg', 'grid');

    const divCheckbox = document.createElement('div');
    divCheckbox.classList.add('flex', 'justify-end', 'pr-3', 'pt-3');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', interesse.id);
    checkbox.classList.add('form-checkbox', 'h-5', 'w-5');
    divCheckbox.appendChild(checkbox);

    const divContent = document.createElement('div');
    divContent.classList.add('grid', 'justify-center');
    const imgInteresse = document.createElement('img');
    imgInteresse.src = interesse.icone;
    imgInteresse.setAttribute('alt', '');
    imgInteresse.classList.add(interesse.classeIcone);
    const h2Interesse = document.createElement('h2');
    h2Interesse.textContent = interesse.nome;
    divContent.appendChild(imgInteresse);
    divContent.appendChild(h2Interesse);

    divInteresse.appendChild(divCheckbox);
    divInteresse.appendChild(divContent);

    main.appendChild(divInteresse);

   
    checkbox.addEventListener('change', async function (){
        if(checkbox.checked == true){
            interesses.push(Number(checkbox.id));
        }else {
            interesses.pop();
        }
        console.log(interesses);
    })
});

const divFinal = document.createElement('div');
divFinal.classList.add('flex', 'items-center', 'gap-2');
const linkContinuar = document.createElement('a');
linkContinuar.textContent = 'CONTINUAR';
const imgSeta = document.createElement('img');
imgSeta.setAttribute('src', '../img/gravity-ui_arrow-up.png');
imgSeta.setAttribute('alt', '');
divFinal.appendChild(linkContinuar);
divFinal.appendChild(imgSeta);
main.appendChild(divFinal);

divFinal.addEventListener('click',  () =>{
    if(interesses.length < 2)
        alert('Selecione pelo menos 2 interesses')
    else{
        localStorage.setItem('interesses', JSON.stringify(interesses))
<<<<<<< HEAD
        window.location.href = '../home/home.html';
=======
        window.location.href = '../home.html';
>>>>>>> 76f54e99b9681c47c47c5e3096147628346f2d53
    }
    
})
}
carregarCategorias()
