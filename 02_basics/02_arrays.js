const marvel_Heros = ['ironman', 'Spiderman', 'thor', 'hulk']
const dc_heros = ['superman', 'batman', 'flash']

// marvel_Heros.push(dc_heros)
// console.log(marvel_Heros);
// console.log(marvel_Heros[4][1]);

const all_heors = marvel_Heros.concat(dc_heros)
// console.log(all_heors);
// console.log(all_heors[4]);


const all_new_hero = [...marvel_Heros , ...dc_heros]
// console.log(all_new_hero);

const another_array = [1, 2, 3,[4, 5], 6, 7,[4,5,[6,7]]]
const allanother_array = another_array.flat(Infinity) // flat = array ke andar ke array ko bhar nikal deta hai 
// console.log(allanother_array); // [1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7]

console.log(Array.isArray('Aman'));
console.log(Array.from('Aman'));
console.log(Array.from({name: 'Aman'})); // its create a empty [] {interseting}

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
 