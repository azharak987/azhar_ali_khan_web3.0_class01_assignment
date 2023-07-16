let countries: string[] = ["Germany", "USA", "Switzerland", "Norway", "Canada"];

console.log("Print as it is");
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
console.log("\n");

console.log("After alphabetic order");
let sortcountries: string[] = countries.slice().sort();
for (let i = 0; i < sortcountries.length; i++) {
    console.log(sortcountries[i]);
}
console.log("\n");

console.log("Array in its original order");
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
console.log("\n");

console.log("In reverse alphabetical order");
let reversecountries: string[] = countries.slice().sort().reverse();
for (let i = 0; i < reversecountries.length; i++) {
    console.log(reversecountries[i]);
}
console.log("\n");

console.log("Array in its original order");
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
console.log("\n");

console.log("Reverse the order of the array");
let reversedArray: string[] = countries.slice().reverse();
for (let i = 0; i < reversedArray.length; i++) {
    console.log(reversedArray[i]);
}
console.log("\n");

console.log("Reverse the order of the array again");
let originalOrder: string[] = reversedArray.slice().reverse();
for (let i = 0; i < originalOrder.length; i++) {
    console.log(originalOrder[i]);
}
console.log("\n");

console.log("Sorting the array in alphabetical order");
let sortedArray: string[] = countries.slice().sort();
for (let i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
console.log("\n");

console.log("Sorting the array in reverse alphabetical order");
let reverseSortedArray: string[] = countries.slice().sort().reverse();
for (let i = 0; i < reverseSortedArray.length; i++) {
    console.log(reverseSortedArray[i]);
}
console.log("\n");