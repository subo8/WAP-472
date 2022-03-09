const findFirstN = function (n, a) {
    if (n >= a.length) {
        console.log("Error: Insufficient items");
    } else {
        return a.filter((value, index, array) => index < n);
    }

}

var a = [1, 3, 6, 2];
a = findFirstN(5, a);
console.log(a);