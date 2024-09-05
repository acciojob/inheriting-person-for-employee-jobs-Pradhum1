// complete this js code
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
      super(name, age);
      this.jobTitle = jobTitle;
    }

    jobGreet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

module.exports = { Person, Employee };
And then, in your test file, you can import these classes using require:

const { Person, Employee } = require('./path_to_script_file');
  
  const person = new Person('Prince', 30);
  person.greet(); 
  const employee = new Employee('Rakhi', 40, 'Software Engineer');
  employee.greet();     
  employee.jobGreet();  
