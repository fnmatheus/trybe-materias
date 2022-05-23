const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const elementoPai = document.getElementById('pai');
// 1
let novoElementoIrmao = document.createElement('section');
novoElementoIrmao.innerText = 'Oi!';

elementoPai.appendChild(novoElementoIrmao);
console.log(novoElementoIrmao);
console.log(novoElementoIrmao.parentElement);
// 2
let novoElementoFilho = document.createElement('section')
novoElementoFilho.innerText = 'Novo filho do filho!';

elementoOndeVoceEsta.appendChild(novoElementoFilho);

console.log(novoElementoFilho);
console.log(novoElementoFilho.parentElement);