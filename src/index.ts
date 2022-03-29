// const name = "Grze",
//     age = 23,
//     gender = "male";

// const sayHi = (name:string, age:number, gender:string):void => {
//     console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// }

interface Human {
    name:string;
    age:number;
    gender:string;
}
const sayHi2 = (person: Human):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}

const person = {
    name: "nicolas",
    age: 22,
    gender: "male"
}

const sayHi = (name:string, age:number, gender:string):string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
}

console.log(sayHi("Grze", 22, "male"));
// console.log(sayHi(person));  won't work
console.log(sayHi2(person))
console.log(sayHi(person.name, person.age, person.gender))


export {};