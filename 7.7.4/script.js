const person = {
    name: 'Kianu Riwz',
    setFullName: function () {console.log(`fullName - ${this.name}`);}
};
const setPersonFullName = {name: 'John Smith'};
const setFullName1 = person.setFullName.bind(setPersonFullName);
setFullName1();