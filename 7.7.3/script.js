const MASS = [
    {name: 'Ваня', age: 67}, 
    {name: 'Аня', age: 45}, 
    {name: 'Петя', age: 13}, 
    {name: 'Миша', age: 18}, 
    {name: 'Маша', age: 33}
];
  const adults = MASS.filter(user => user.age >= 18);
  const names = adults.map(user => user.name);
  console.log(names);