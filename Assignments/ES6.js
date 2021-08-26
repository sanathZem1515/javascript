const printName = (name) => "Hi " + name;
console.log(printName("Naruto"))


const printBill = (name, bill) => {
    return `Hi ${name}! Please pay ${bill}`;
}
console.log(printBill("Sasuke", 1000))


const person = {
    name: "Nam Chomsky",
    age: 92
}

let { name, age } = person;
console.log('Name:' + name + ' Age:' + age)