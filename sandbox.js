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
// Class
var Invoice = /** @class */ (function () {
    function Invoice(a, b, c) {
        this.recipient = a;
        this.details = b;
        this.amount = c;
    }
    Invoice.prototype.format = function () {
        return this.recipient + " is owed \u00A3" + this.amount + " for " + this.details;
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
    console.log(inv.recipient, inv.details, inv.amount, inv.format());
});
var me = {
    name: 'shaun',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log("hello", person.name);
};
console.log(me);
var docONe;
var docTwo;
docONe = new Invoice('yoshi', 'web work', 250);
var docs = [];
docs.push(docONe);
docs.push(docTwo);
var Payment = /** @class */ (function () {
    function Payment(receipient, details, amount) {
        this.receipient = receipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return this.receipient + " is owed \u00A3" + this.amount + " for " + this.details;
    };
    return Payment;
}());
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplate;
}());
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
