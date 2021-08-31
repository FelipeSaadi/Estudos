// String
let Name: string = "Felipe"
console.log(Name)
// Name = 21

// Numbers
let age: number = 22
// age = "Felipe"
age = 22.5
console.log(age)

// Boolean
let haveHobbies: boolean = false
// haveHobbies = 1
console.log(haveHobbies)

// Types Explicit
let myAge: number
myAge = 22
console.log(typeof myAge)
// myAge = "my age is 22"

// Array
let hobbies: any[] = ["Play", "Read", "Walk"]
console.log(typeof hobbies)

hobbies = [125]

// Tuplas
let adress: [string, number, string] = ["Brooklyn", 99, ""]
console.log(adress)

adress = ["New Place", 225, "Street"]
console.log(adress)

// Enums
enum Color {
    black,
    white = 100,
    red = 25,
    blue = 2,
    grey,
    pink,
    orange
}

let myColor: Color = Color.red
console.log(myColor)
console.log(Color.black, Color.white)
console.log(Color.blue, Color.grey, Color.pink, Color.orange)

// Any
let car: any = "BMW"
console.log(car)
car = { brand: "BMW", age: 2020 }
console.log(car)