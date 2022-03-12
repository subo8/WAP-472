/**
 * patient.js
 * @author Byambadorj
 * @since 2022-03-11
 */

"use strict";

export class Patient {
    #id = null;
    #firstName = null;
    #middle = null;
    #lastName = null;
    #dateOfBirth = null;
    #department = null;
    #outPatient = null;

    constructor(id, firstName, middle, lastName, dateOfBirth, department, outPatient) {
        this.#id = id;
        this.#firstName = firstName;
        this.#middle = middle;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
        this.#department = department;
        this.#outPatient = outPatient;
    }

    getId() { return this.#id; }
    getFirst() { return this.#firstName; }
    getMiddle() { return this.#middle; }
    getLast() { return this.#lastName; }
    getDob() { return this.#dateOfBirth; }
    getDepartment() { return this.#department; }
    getOutPatient() { return this.#outPatient; }

    setID(id) {
        this.#id = id;
    }
    setFirst(firstname) {
        this.#firstName = firstname;
    }
    setMiddle(middle) {
        this.#middle = middle;
    }
    setLast(lastname) {
        this.#lastName = lastname;
    }
    setDob(dob) {
        this.#dateOfBirth = dob;
    }
    setDepartment(department) {
        this.#department = department;
    }
    setOutPatient(outpatient) {
        this.#outPatient = outpatient;
    }
}