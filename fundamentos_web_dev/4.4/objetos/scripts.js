//Para fixar
// 1
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
};
// 2
console.log('A jogadora ' + player.name + ' ' + player.lastName + 'tem ' + player.age + ' anos de idade');

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + 'tem ' + player['age'] + ' anos de idade');
// 3
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.table(player);
//4
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes');
//5
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

console.log('A jogadora possui ' + player['medals']['golden'] + ' medalhas de ouro e ' + player['medals']['silver'] + ' medalhas de prata');