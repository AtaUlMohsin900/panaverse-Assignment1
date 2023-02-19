"use strict";
exports.__esModule = true;
var lowerCase = "ata ul mohsin";
var upperCase = "Ata Ul Mohsin";
var titleCase = "Ata uL MoHSIN";
var empty = "";
lowerCase.split(" ");
var capitalizeWord = function (str) {
    var firstChar = str
        .charAt(0)
        .toLocaleUpperCase();
    var rest0fStr = str
        .substring(1)
        .toLocaleLowerCase();
    return "".concat(firstChar).concat(rest0fStr);
};
var capitalizeEachWord = function (str) { return (str
    .split(" ")
    .map(function (word) { return capitalizeWord(word); })
    .join(" ")); };
console.warn(titleCase);
