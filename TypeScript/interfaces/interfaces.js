"use strict";
function sayHello(person) {
    console.log("Hello, " + person.name);
}
function changeName(person) {
    person.name = "Tobias";
}
var person = {
    name: "Felipe",
    age: 22,
    greet: function (surname) {
        console.log("Hello " + this.name + " " + surname);
    }
};
sayHello(person);
changeName(person);
sayHello(person);
// sayHello({ name: "Rick", age: 25, height: 1.80 })
person.greet("Miller");
// Using Class
var Client = /** @class */ (function () {
    function Client() {
        this.name = '';
    }
    Client.prototype.greet = function (surname) {
        console.log("Hello, my name is " + this.name + " " + surname);
    };
    return Client;
}());
var myClient = new Client();
myClient.name = "Lana";
sayHello(myClient);
myClient.greet("Justice");
var pow;
pow = function (base, exp) {
    //return Array(exp).fill(base).reduce((t, a) => t * a)
    return Math.pow(base, exp);
};
console.log(pow(60, 2));
