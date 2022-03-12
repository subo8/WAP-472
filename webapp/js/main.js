/**
 * https://subo8.github.io/
 */

"use strict";

import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";

const anna = new Person("Anna Smith", new Date(1998, 12, 15));
const bob = new Person("Bob Jone", new Date(1945, 11, 16));
const carlos = new Person("Carlos Slim Helu", new Date(1976, 9, 24));

const people = [anna, bob, carlos];
//What is the difference between (e) and e
people.forEach((e) => {
    console.log(e.toString());
});

const jim = new Employee("Jim Harrison", new Date(1989, 5, 6), 245990.00, new Date(2022, 10, 10));
jim.doJob("Programmer");
jim.toString();
