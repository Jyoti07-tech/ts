var character = 'mario';
var age = 30;
var isBlackBelt = false;
// character = 'luigi';
age = 40;
// console.log(character);
var inputs = document.querySelectorAll('input');
// console.log(inputs);
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
inputs.forEach(function (input) {
    console.log(input);
});
//array
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
console.log(names);
var numbers = [10, 20, 30];
numbers.push(50);
console.log(numbers);
//objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
console.log(ninja.age);
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
//explicit types
var isLogged;
var ages;
ages = 30;
isLogged = true;
//arrays
var ninjas = [];
ninjas.push('shaun');
//union types
var mixed = [];
mixed.push('hello');
var uid;
uid = '123';
uid = 123;
// objects
var ninjaOne;
ninjaOne = {
    name: 'yoshi'
};
//
var ninjaa;
ninjaa = {
    name: 'yoshi', age: 25
};
console.log(ninjaa);
var greet = function () {
    console.log('hello, again');
};
var add = function (a, b) {
    console.log(a + b);
};
var logDetails = function (uid, item) {
    console.log('${item} has a uid of ${uid}');
};
var greets = function (user) {
    console.log('${user.name} says hello');
};
var logDetail;
logDetail = function (ninja) {
    console.log('${ninja.name} is $(ninja.age) years old');
};
// const anchor = document.querySelector('a')!;
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.Format = function () {
        return this.client + " owes rs " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on the mario website", 250);
var invTwo = new Invoice("lui", "work on the lui wensit", 250);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.amount, inv.Format());
});
