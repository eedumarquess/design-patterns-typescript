function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,

  fullname() {
    return `${this.firstName} ${this.lastName}`
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age)
  this.fromSubClass = 'Oie'
}

const person1 = new Person('Luiz', 'Miranda', 20)
console.log(person1)
console.log(person1.fullname())

const person2 = new SubPerson('Lana', 'Miranda', 20)
console.log(person2)
console.log(person2.fullname())