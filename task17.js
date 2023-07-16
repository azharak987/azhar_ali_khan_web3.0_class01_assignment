var guests__ = ["Ali", "Azhar", "Khan"];
for (var k = 0; k < guests__.length; k++) {
    console.log("Dear ".concat(guests__[k], ", I would like to invite you to dinner"));
}
console.log("Mr. ".concat(guests__[0], " can't come to dinner"));
guests__[0] = "Aslam";
for (var k = 0; k < guests__.length; k++) {
    console.log("Dear ".concat(guests__[k], ", I would like to invite you to dinner"));
}
console.log("Got a bigger dinning table\n");
guests__[3] = "Umer";
guests__[4] = "Bilal";
guests__[5] = "Usama";
for (var k = 0; k < guests__.length; k++) {
    console.log("Dear ".concat(guests__[k], ", I would like to invite you to dinner"));
}
console.log("Bigger table can't arrive on time");
for (var l = 0; l <= guests__.length; l++) {
    console.log("Popped: ", guests__.pop());
}
for (var l = 0; l < guests__.length; l++) {
    console.log("".concat(guests__[l], ", You are still invited"));
}
for (var l = 0; l <= guests__.length; l++) {
    console.log("Popped: ", guests__.pop());
}
console.log("Empty List: ", guests__);
