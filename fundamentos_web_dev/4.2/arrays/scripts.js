let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList.length);
// 3
let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café
let searchForLestTask = tasksList[tasksList.length - 1];
console.log(searchForLestTask);
// Brincar com o cachorro
tasksList.push('Fazer exercícios da Trybe'); // adiciona mais um item no final da array
console.log(tasksList);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
tasksList.unshift('Acordar'); // adiciona mais um item no começo da array
console.log(tasksList);
// ['Acordar', 'Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.pop(); // remove o último item da lista
console.log(tasksList);
// ['Tomar café', 'Reunião']
tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.shift(); // remove o primeiro item da lista
console.log(tasksList);
// ['Reunião', 'Brincar com o cachorro']
tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
let indexOfTask = tasksList.indexOf('Reunião'); // coleta a posição que se encontra o tem da array
console.log(indexOfTask);
// 1