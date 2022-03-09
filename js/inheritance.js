//In JavaScript month start zero!!!
//Inheritance

const person = {
    name: null,
    dateOfBirth: null
}

const student = {
    cgpa: 0.00
}

//Legacy way
// student.__proto__ = person;

//Another way
Object.setPrototypeOf(student, person);
console.log(Object.getPrototypeOf(student));
