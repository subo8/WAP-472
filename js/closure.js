/**
 * app.js
 */
x = 17;
var a = 50;
var b = 100;
var c = function (a, b, c) {
    console.log(x + "<br>");
    console.log(a + "<br>");
    var f = function (a, b, c) {
        b = a;
        console.log(b + "<br>");
        b = c;
        var x = 15;
    }
    f(a, b, c);
    console.log(b + "<br>");
    var x = 100;
}
c(18, 19, 100);
