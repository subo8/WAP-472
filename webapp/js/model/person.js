"use strict";

export class Person {
    #name = null;
    #dateOfBirth = null;

    constructor(name, dateOfBirth) {
        this.#name = name;
        this.#dateOfBirth = dateOfBirth;
    }
    getName() { return this.#name; }
    getDateOfBirth() { return this.#dateOfBirth; }

    setName(newName) {
        this.#name = newName;
    }
    setDateOfBirth(newDOB) {
        this.#dateOfBirth = newDOB;
    }
    toString() {
        let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return `Name: ${this.#name}, DateOfBirth: ${this.#dateOfBirth.toLocaleString("en-US", options)}`;
    }
}