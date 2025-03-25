"use strict";

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("Alice", 30);

person1.greet();

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
  haveBirthday (){
    this.age ++
    console.log(`${this.name} is now ${this.age} years old, today!`);
  }
}

const person2 = new Person2("Alice", 30);
person2.greet();

person2.haveBirthday();




