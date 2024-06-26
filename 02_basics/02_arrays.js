const mr_Hero = ["thor", "ironman", "spiderman"]
const dc_Hero = ["superman", "flash", "batman"]

// mr_Hero.push(dc_Hero)

// console.log(mr_Hero[3][1]);
// let all_Hero = mr_Hero.concat(dc_Hero)
// console.log(all_Hero);


// spred concat array
const all_new_heros = [...mr_Hero, ...dc_Hero]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("vishwa"));
// convert into array
console.log(Array.from("vishwa"));


console.log(Array.from({name: "vishwa"}));
//imp for interview


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2, score3,score4));

