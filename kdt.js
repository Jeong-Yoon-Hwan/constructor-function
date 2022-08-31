function kdt(name,age,weight,height) {
  this.id = name;
  this.age = age;
  this.weight = weight;
  this.height = height;
}

// const yoonhwan = new kdt('슈크림','김치','소주');
// console.log(typeof(yoonhwan));

const members = [];
for(let i=0;i<5;i++){
  members.push(new kdt(i+1,"hello","bye"));
}

function pokemon(id,name){
  this.id= id;
  this.name = name;
}

const list =['피카츄','라이츄','파이리','꼬부기','버터플'];

const pokemons = [];
for(let i=0;i<list.length;i++){
  pokemons.push(new pokemon(i+1,list[i]))
}

console.log(pokemons);


