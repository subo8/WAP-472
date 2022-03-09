/* You can check github pages below address*/
/* https://subo8.github.io */

"use strict";
/* Prob 6 */

// var add = (function () {
//     var counter = 0;
//     return function () {
//         return counter += 1;
//     }
// })();

// console.log(add());

//Solution1 create module with function
let count = (function () {
    let counter = 0;
    function add() {
        counter += 1;
        console.log("Prob6 Increasing counter: " + counter);
        document.getElementById("prob61").innerText = "Result: " + counter;
    }
    function reset() {
        counter = 0;
        console.log("Resetting counter: " + counter);
        document.getElementById("prob62").innerText = "Result: " + counter;
    }
    add();
    reset();

    return counter;
})
console.log("In the end counter value is: " + count());
document.getElementById("prob63").innerText = "Result: " + count();

//Solution2 create count1 object with properties
let count1 = {
    counter: 0,
    add: function () {
        return this.counter += 1
    },
    reset: function () {
        return this.counter = 0;
    }
}

count1.add();
console.log(count1.counter);
document.getElementById("prob62_1").innerText = "Result: " + count1.counter;
count1.reset();
console.log(count1.counter);
document.getElementById("prob62_2").innerText = "Result: " + count1.counter;

//Solution3 using arrow function (ES6)
const count2 = {
    counter: 0,
    add: function () {
        const setOne = (newValue => this.counter = 1);
        setOne();
        return this.counter;
    },
    reset: function () {
        const setZero = (newValue => this.counter = 0);
        setZero();
        return this.counter;
    }
}
console.log(count2.add());
document.getElementById("prob63_1").innerText = "Result: " + count2.add();;
console.log(count2.reset());
document.getElementById("prob63_2").innerText = "Result: " + count2.reset();;

/* Prob 7 */
// counter is free variable

/* Prob 8 */
var make_adder = function (n) {
    let counter = 0;
    return function () {
        counter += n;
        // console.log(counter);
        return counter;
    }
};

var add5 = make_adder(5);
// add5();
// add5();
// add5();
document.getElementById("prob8_1").innerText = "Result: " + add5();
document.getElementById("prob8_2").innerText = "Result: " + add5();
document.getElementById("prob8_3").innerText = "Result: " + add5();


/* Prob 9 */
// Simple modification Javascript file can remove all the names from the Global namespace is Module Pattern - IIFE.

/* Prob 10 */
const Employee = (function () {
    let name = null;
    let age = 0;
    let salary = 0.00;

    //public method
    const setAge = function (newAge) {
        age = newAge;
    }
    //public method
    const setSalary = function (newSalary) {
        salary = newSalary;
    }
    //public method
    const setName = function (newName) {
        name = newName;
    }
    //private method
    const getAge = function () {
        return age;
    }
    //private method
    const getSalary = function () {
        return salary;
    }
    //private method
    const getName = function () {
        return name;
    }

    //public method using private get method
    const increaseSalary = function (percentage) {
        let oldSalary = getSalary();
        setSalary(oldSalary + (oldSalary / 100) * percentage);
        return getSalary();
    }

    //public method using private get method
    const increaseAge = function (age) {
        let oldAge = getAge();
        setAge(oldAge + age);
        return getAge();
    }

    return {
        publicSetAge: setAge,
        publicSetSalary: setSalary,
        publicSetName: setName,
        publicIncreaseSalary: increaseSalary,
        publicIncreaseAge: increaseAge,
    }

})();

Employee.publicSetName("Byambadorj");
Employee.publicSetSalary(100000.00);
Employee.publicSetAge(30);

// console.log(Employee.publicIncreaseSalary(30));
document.getElementById("prob10_1").innerText = "Result: " + Employee.publicIncreaseSalary(30);
// console.log(Employee.publicIncreaseAge(5));
document.getElementById("prob10_2").innerText = "Result: " + Employee.publicIncreaseAge(5);

/* Prob 11 */
Employee.address = function () {
    let address = null;

    const setAddress = function (addr) {
        address = addr;
    }
    const getAddress = function () {
        return address;
    }

    return {
        publicSetAddress: setAddress,
        publicGetAddress: getAddress,
    }
}();

Employee.address.publicSetAddress("106 S D St, FairField 52556");
console.log(Employee.address.publicGetAddress());
document.getElementById("prob11_1").innerText = "Result: " + Employee.address.publicGetAddress();