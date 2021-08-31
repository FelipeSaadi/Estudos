"use strict";
// String
var Name = "Felipe";
console.log(Name);
// Name = 21
// Numbers
var age = 22;
// age = "Felipe"
age = 22.5;
console.log(age);
// Boolean
var haveHobbies = false;
// haveHobbies = 1
console.log(haveHobbies);
// Types Explicit
var myAge;
myAge = 22;
console.log(typeof myAge);
// myAge = "my age is 22"
// Array
var hobbies = ["Play", "Read", "Walk"];
console.log(typeof hobbies);
hobbies = [125];
// Tuplas
var adress = ["Brooklyn", 99, ""];
console.log(adress);
adress = ["New Place", 225, "Street"];
console.log(adress);
// Enums
var Color;
(function (Color) {
    Color[Color["black"] = 0] = "black";
    Color[Color["white"] = 100] = "white";
    Color[Color["red"] = 25] = "red";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["grey"] = 3] = "grey";
    Color[Color["pink"] = 4] = "pink";
    Color[Color["orange"] = 5] = "orange";
})(Color || (Color = {}));
var myColor = Color.red;
console.log(myColor);
console.log(Color.black, Color.white);
console.log(Color.blue, Color.grey, Color.pink, Color.orange);
// Any
var car = "BMW";
console.log(car);
car = { brand: "BMW", age: 2020 };
console.log(car);
