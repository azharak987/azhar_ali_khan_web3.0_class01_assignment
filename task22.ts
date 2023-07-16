var my_guests = ["Ali", "Azhar", "Khan"];
for (var k = 0; k < my_guests.length+1; k++) {
    console.log("Dear ".concat(my_guests[k], ", I would like to invite you to dinner"));
}
console.log("Total Number of Guests invited: ", my_guests.length);