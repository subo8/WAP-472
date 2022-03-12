"use strict";

import { Person } from "./person.js";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

export class Employee extends Person {
    #salary = null;
    #hireDate = null;
    #jobTitle = null;

    constructor(name, dateOfBirth, salary, hireDate) {
        super(name, dateOfBirth);
        this.#salary = salary;
        this.#hireDate = hireDate;
    }

    doJob(jobTitle) {
        this.#jobTitle = jobTitle
        return this.#jobTitle;
    }

    toString() {
        console.log(`${this.getName()} is a ${this.#jobTitle} who earns ${formatter.format(this.#salary)}`)
    }
}