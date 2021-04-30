let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 'luigi';
age = 40;
// console.log(character);

const inputs = document.querySelectorAll('input');
// console.log(inputs);

const circ = (diameter:number) => {
    return diameter *Math.PI;
}
console.log(circ(7.5));

inputs.forEach(input =>{
    console.log(input);
});


//array
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
console.log(names);

let numbers = [10, 20, 30];
numbers.push(50);
console.log(numbers);

//objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

console.log(ninja.age);
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age : 40
};


//explicit types


let isLogged: boolean;
let ages: number;

ages = 30;

isLogged = true;


//arrays
let ninjas: string [] = [];
ninjas.push('shaun');

//union types
let mixed: (string | number | boolean)[] = [];
mixed.push('hello');

let uid: string | number;
uid = '123';
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = {
    name: 'yoshi'
}

//

let ninjaa: {name: any, age: any};

ninjaa ={
    name: 'yoshi', age: 25
};

console.log(ninjaa);



let greet = () =>{
    console.log('hello, again');
}

type StringOrNum = string | number;
const add = (a: number, b: number) => {
    console.log(a+b);
}

const logDetails = (uid : string | number, item: string) => {
    console.log('${item} has a uid of ${uid}');
}

const greets = (user: {name: string, uid: string | number}) => {
    console.log('${user.name} says hello');
}

let logDetail: (obj : {name: string, age: number}) => void;

logDetail = (ninja : {name: string, age: number}) => {
    console.log('${ninja.name} is $(ninja.age) years old');
}
// const anchor = document.querySelector('a')!;
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  );
});