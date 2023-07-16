var guests = ["Ali", "Azhar", "Khan"];
for (var k = 0; k < guests.length; k++) {
    console.log("Dear ".concat(guests[k], ", I would like to invite you to dinner"));
}
console.log("Mr. ".concat(guests[0], " can't come to dinner"));
guests[0] = "Aslam";
for (var k = 0; k < guests.length; k++) {
    console.log("Dear ".concat(guests[k], ", I would like to invite you to dinner"));
}
