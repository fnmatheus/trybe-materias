// 1
console.log(document.querySelector('#elementoOndeVoceEsta'));
// 2
document.querySelector('#elementoOndeVoceEsta').parentElement.style.backgroundColor = 'red';
// 3
document.querySelector('#primeiroFilhoDoFilho').innerHTML = '<p>Você está sendo filmado</p>';
// 4
console.log(document.querySelector('#pai').firstElementChild);
// 5
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);
// 6
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);
// 7
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);
// 8
console.log(document.querySelector('#pai').children[document.querySelector('#pai').children.length - 2]);