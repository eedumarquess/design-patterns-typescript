const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,

  fullname() {
    return `${this.firstName} ${this.lastName}`
  },
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson);
anotherPerson.firstName = 'Joana'
console.log(anotherPerson);
console.log(anotherPerson.fullname())