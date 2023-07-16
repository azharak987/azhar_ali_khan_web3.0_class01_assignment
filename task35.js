var animals = ["cats", "dogs", "goat"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (var i = 0; i < animals.length; i++) {
    console.log("".concat(animals[i], " can be good pets"));
}
console.log("".concat(animals[0], ", ").concat(animals[1], ", and ").concat(animals[2], " have 4 legs"));
