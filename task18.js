var places = ["Germany", "USA", "Switzerland", "Norway", "Dubai", "Qatar"];
console.log("Print as it is");
for (var i = 0; i < places.length; i++) {
    console.log(places[i]);
}
console.log("\n");
console.log("After alphabetic order");
var sortPlaces = places.slice().sort();
for (var i = 0; i < sortPlaces.length; i++) {
    console.log(sortPlaces[i]);
}
console.log("\n");
console.log("Array in its original order");
for (var i = 0; i < places.length; i++) {
    console.log(places[i]);
}
console.log("\n");
console.log("In reverse alphabetical order");
var reversePlaces = places.slice().sort().reverse();
for (var i = 0; i < reversePlaces.length; i++) {
    console.log(reversePlaces[i]);
}
console.log("\n");
console.log("Array in its original order");
for (var i = 0; i < places.length; i++) {
    console.log(places[i]);
}
console.log("\n");
console.log("Reverse the order of the array");
var reversedArray = places.slice().reverse();
for (var i = 0; i < reversedArray.length; i++) {
    console.log(reversedArray[i]);
}
console.log("\n");
console.log("Reverse the order of the array again");
var originalOrder = reversedArray.slice().reverse();
for (var i = 0; i < originalOrder.length; i++) {
    console.log(originalOrder[i]);
}
console.log("\n");
console.log("Sorting the array in alphabetical order");
var sortedArray = places.slice().sort();
for (var i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
console.log("\n");
console.log("Sorting the array in reverse alphabetical order");
var reverseSortedArray = places.slice().sort().reverse();
for (var i = 0; i < reverseSortedArray.length; i++) {
    console.log(reverseSortedArray[i]);
}
console.log("\n");
