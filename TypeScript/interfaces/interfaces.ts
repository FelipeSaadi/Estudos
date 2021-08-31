interface Human {
    name: string,
    age?: number,
    [prop: string]: any,
    greet(surname: string): void
}

function sayHello(person: Human) {
    console.log("Hello, " + person.name)
}

function changeName(person: Human) {
    person.name = "Tobias"
}

const person: Human = {
    name: "Felipe",
    age: 22,
    greet(surname) {
        console.log(`Hello ${this.name} ${surname}`)
    }
}

sayHello(person)
changeName(person)
sayHello(person)
// sayHello({ name: "Rick", age: 25, height: 1.80 })
person.greet("Miller")

// Using Class
class Client implements Human {
    name: string = ''
    greet(surname: string) {
        console.log(`Hello, my name is ${this.name} ${surname}`)
    }
}

const myClient = new Client()
myClient.name = "Lana"
sayHello(myClient)
myClient.greet("Justice")

// Interface Function
interface calcFunc {
    (a: number, b: number): number
}

let pow: calcFunc
pow = function (base: number, exp: number): number {
    //return Array(exp).fill(base).reduce((t, a) => t * a)
    return base ** exp
}
console.log(pow(60, 2))