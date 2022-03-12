"use strict";

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed += speed;
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stads still.`);
//     }
// }
// console.log(Animal.prototype);

// class Rabbit extends Animal {
//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//     }
//     hide() {
//         console.log(`${this.name} hides!`);
//     }
//     stop() {
//         super.stop();
//         this.hide();
//     }
// }
// console.log(Rabbit.prototype);

// let rabbit = new Rabbit("White Rabbit");
// console.log(rabbit);
// rabbit.run(5);
// rabbit.stop();

class User {
    static staticMethod() {
        console.log(this == User);
    }
}

console.log(User.prototype);