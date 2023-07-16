var string1 = "My String";
var string2 = "Your String";
var num1 = 2;
var num2 = 4;
var myArray = [1, 2, 3, 4];
if (string1 === string2) {
    console.log("string1 = string2");
}
if (string1 != string2) {
    console.log("string1 is not equal to string2");
}
if (num1 < num2) {
    console.log("num1 < num2");
}
if (num1 > num2) {
    console.log("num1 > num2");
}
if (num1 === num2) {
    console.log("Num1 = num2");
}
var flag = false;
for (var m = 0; m < myArray.length; m++) {
    if (myArray[m] === 1) {
        console.log("1 is in the array");
    }
    if (myArray[m] === 5) {
        console.log("5 is in the array");
        flag = true;
    }
}
if (flag === false) {
    console.log("5 is not in the array");
}
