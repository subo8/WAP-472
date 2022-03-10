/** You can check github page following url
 * 
 * https://subo8.github.io/
 */

"use strict";

const person = {
    name: null,
    dataOfBirth: null,
    getName: function () {
        return this.name;
    },
    setName: function (newValue) {
        this.name = newValue;
    }
}

const john = Object.create(person);
john.setName("John");
john.dataOfBirth = new Date(1998, 12 - 1, 10);
console.log("The person's name is " + john.getName())
console.log(john.getName() + " was born on " + john.dataOfBirth.toISOString().slice(0, 10));
document.getElementById("prob1.1").innerText = "// " + "The person's name is " + john.getName();
document.getElementById("prob1.2").innerText = "// " + john.getName() + " was born on " + john.dataOfBirth.toISOString().slice(0, 10);

/* Prob-2 Employee */
const employee = Object.create(person, {
    salary: {
        writable: true,
        value: 0.00
    },
    hireDate: {
        value: new Date().toJSON().slice(0, 10)
    },
    doJob: {
        value: function (jobTitle) {
            return jobTitle;
        }
    }
});

const formatterr = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

employee.name = "Anna";
employee.salary = 249995.50;

console.log(employee.name + " is a " + employee.doJob("Programmer") + " who earns " + formatterr.format(employee.salary));
document.getElementById("prob2").innerText = "// " + employee.name + " is a " + employee.doJob("Programmer") + " who earns " + formatterr.format(employee.salary);

/** Prob-3 Person object with constructor */
const Person = function () {
    this.name = null;
    this.dataOfBirth = null;
}
Person.prototype.toString = function () {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    // console.log("Name: " + this.name + ", DateOfBirth: " + this.dataOfBirth.toLocaleString("en-US", options));
    return "Name: " + this.name + ", DateOfBirth: " + this.dataOfBirth.toLocaleString("en-US", options);
}
const peter = new Person();
peter.name = "Peter";
peter.dataOfBirth = new Date(1985, 11 - 1, 10);
// peter.toString();
document.getElementById("prob3").innerText = `//  ${peter.toString()}`;