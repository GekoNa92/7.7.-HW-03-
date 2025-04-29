const person = 
  { name: 'Ваня',
  age: 25 };

function printInfo(name) {console.log(`Name: ${this.name}, Age: ${this.age}.`);}
printInfo.call(person);