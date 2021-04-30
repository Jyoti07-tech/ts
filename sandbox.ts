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






// Class


class Invoice {
    recipient: any;
    details: any;
    amount: any;
    constructor(a, b, c) {
        this.recipient = a;
        this.details = b;
        this.amount = c;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}


const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("lui", "work on the lui wensit", 250);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invoices.forEach(inv =>{
    console.log(inv.recipient, inv.details, inv.amount, inv.format());
});


// Interface
interface IsPerson{
    name: string;
    age: number;
    speak(a: string):void;
    spend(a:number): number;
}

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount:number): number{
        console.log('I spent', amount);
        return amount;
    }
}

const greetPerson = (person: IsPerson) => {
    console.log("hello", person.name);
}
console.log(me);


// interface
interface HasFormatter{
    format(): string;
}

let docONe: HasFormatter;
let docTwo: HasFormatter;

docONe = new Invoice('yoshi', 'web work', 250);

let docs: HasFormatter[] = [];
docs.push(docONe);
docs.push(docTwo);


class Payment implements HasFormatter {
    constructor(
        readonly receipient: string,
        private details: string,
        public amount: number
    ) {}
    format() {
        return `${this.receipient} is owed £${this.amount} for ${this.details}`;
    }
}



class ListTemplate {
    constructor(private container: HTMLUListElement){} 

    render(item: HasFormatter, heading: string, pos: 'start'| 'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if(pos==='start'){
            this.container.prepend(li);
        }else {
            this.container.append(li);
        }
    }
}
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc:HasFormatter;
    if(type.value==='invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc,type.value, 'end')
    console.log(
      type.value, 
      tofrom.value, 
      details.value, 
      amount.valueAsNumber
    );
  });