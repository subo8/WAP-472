"use strict";

// Prob1 - Return largest value of 2 numbers
function max(a, b) {
    let result;
    if (a > b) {
        result = a;
    } else {
        result = b;
    }
    console.log("Prob1: " + result);
    document.getElementById("prob1").innerText = "Result: " + result;
}
max(3, 5);

// Prob2 - Return largest value of 3 numbers
function maxOfThree(num1, num2, num3) {
    let result;
    result = Math.max(num1, num2, num3);
    console.log("Prob2: " + result);
    document.getElementById("prob2").innerText = "Result: " + result;
}
maxOfThree(1, 2, 3);

// Prob3 - isVowel() return true else false
function isVowel(character) {
    const vowel = ["a", "e", "i", "o", "u"];
    const matched = character.match(/[aeiou]/);

    if (matched) {
        document.getElementById("prob3").innerText = "Result: " + true;
        return true;

    } else {
        document.getElementById("prob3").innerText = "Result: " + false;
        return false;
    }

}
console.log("Prob3: " + isVowel("u"));

// Prob4 - sum all elements in array 
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    document.getElementById("prob4").innerText = "Result: " + result;
    return result;
}

console.log("Prob4 Sum: " + sum([1, 2, 3, 4]));

// Prob4 - multiply all elements in array
function multiply(arr) {
    let result = 1;
    let i = 0;
    while (i < arr.length) {
        result = result * arr[i];
        i++;
    }
    document.getElementById("prob41").innerText = "Result: " + result;
    return result;
}

console.log("Prob4 Multiply: " + multiply([1, 2, 3, 4]));

// Prob5 - reversal string
function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    document.getElementById("prob5").innerText = "Result: " + result;
    return result;
}

console.log("Prob5 Reverse: " + reverse("jag testar"));

// Prob6 - find longest word in array 
function findLongestWord(words) {
    let result;
    words.forEach(e => {
        result = Math.max(e.length);
    })
    document.getElementById("prob6").innerText = "Result: " + result;
    return result;
}

console.log("Longest word length: " + findLongestWord(["apple", "blueberry", "strawberry", "effortlessly"]));

// Prob7 - return words given i length
function filterLongestWord(words, i) {
    const result = [];
    words.forEach(e => {
        if (e.length > i) {
            result.push(e);
        }
    })
    document.getElementById("prob7").innerText = "Result: " + result;
    return result;
}

console.log("More character than given number: " + filterLongestWord(["apple", "blueberry", "strawberry", "effortlessly"], 9));

// Prob8 - computeSumOfSquares
function computeSumOfSquares(arr) {
    let result = 0;
    arr.forEach(e => {
        result += Math.pow(e, 2);

    })
    document.getElementById("prob8").innerText = "Result: " + result;
    return result;
}

console.log("Square of each item in array: " + computeSumOfSquares([1, 2, 3]));

// Prob9 - Prints only odd numbers
function printOddNumbersOnly(arr) {
    const result = arr.filter(odd => odd % 2 != 0);
    document.getElementById("prob9").innerText = "Result: " + result;
    return result;
}

console.log("Only odd numbers of array sum: " + printOddNumbersOnly([1, 2, 3, 4, 5]));

// Prob10 - Sqaure of even numbers sum
function computeSumOfSquaresOfEvensOnly(arr) {
    let result = 0;
    const evens = arr.filter(odd => odd % 2 == 0);
    evens.forEach(e => {
        result += Math.pow(e, 2);
    })
    document.getElementById("prob10").innerText = "Result: " + result;
    return result;
}
console.log("Even numbers sum: " + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

// Prob11 - reduce sum prob4
function sumReduce(arr) {
    return arr.reduce(function (sum, number) {
        const updatedSum = sum + number;
        return updatedSum;
    }, 0);
}
console.log("Sum of array elements using reduce: " + sumReduce([1, 2, 3, 4]));

// Prob11 - reduce multiply sum prob4
function multiplyReduce(arr) {
    return arr.reduce(function (multiply, number) {
        const updatedMulti = multiply * number;
        return updatedMulti;
    })
}
console.log("Multiply of array elements using reduce: " + multiplyReduce([1, 2, 3, 4]));

// Prob12 - findSecondBiggest
function findSecondBiggest(arr) {
    let result = 0;
    let maxVal = arr.reduce(function (a, b) {
        return Math.max(a, b);
    })
    arr.forEach(e => {
        if (e != maxVal && e > result) {
            result = e;
        }
    })
    document.getElementById("prob12").innerText = "Result: " + result;
    return result;
}
console.log("Find second biggest: " + findSecondBiggest([19, 9, 11, 0, 12]));
// console.log(findSecondBiggest([1, 2, 3, 4, 5]));

// Prob13 - Fibonachi
function printFibo(l, p1, p2) {
    let result = [];
    if (l > 0) result.push(p1);
    if (l > 1) result.push(p2);
    for (let i = 2; i < l; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    document.getElementById("prob13").innerText = "Result: " + result;
    return result;
}
console.log("Fibonachi sequence: " + printFibo(10, 0, 1));

// Prob14a - Form1
function button1() {
    let email = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;
    let url = document.getElementById("exampleInputUrl").value;
    if (!email || !password || !url) {
        alert("Form-1 all inputs should not be empty");
    } else {
        console.log(
            `email : ${email}\n
password : ${password}\n
url : ${url}`);
    }
}
// Prob14b - Form2
function button2() {
    let prodNum = document.getElementById("prodNumber").value;
    let quantity = document.getElementById("quantity").value;
    let city = document.getElementById("inputCity").value;
    let inputState = document.getElementById("inputState").value;
    let price = document.getElementById("unitPrice").value;
    let date = document.getElementById("dateInput").value;

    if (!prodNum || !quantity || !city || !inputState || !price || !date) {
        alert("Form-2 all inputs should not be empty");
    } else {
        alert(`
        Product number: ${prodNum}\n
        Quantity: ${quantity}\n
        Name: ${city}\n
        Supplier: ${inputState}\n
        Price: ${price}\n
        Date: ${date} `);
    }
}

// Prob15 - Timer
function myClock() {
    setTimeout(function () {
        const d = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        const n = d.toLocaleTimeString();
        document.getElementById("clock").innerHTML = `${ye}-${mo}-${da} ` + n;
        myClock();
    }, 1000)
}
myClock();