"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function SignUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("jk");
SignUpUser("jk", "jk@.COM", false);
loginUser("jk", "mk@gmail.COM");
// returning multiple typoes of data
// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "Hulk", "Batman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is: ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
