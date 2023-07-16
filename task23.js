var car = "merc";
var year = 2023;
var model = "S580";
if (car === "merc") {
    console.log("Is car == Merc | I predict true");
}
if (car === "bmw") {
    console.log("Is car == BMW, I predict false");
}
if (year === 2023) {
    console.log("Is year 2023 I predict true");
}
if (year === 2022) {
    console.log("Is year 2022, I predict false");
}
if (model === "S580") {
    console.log("Is model = S580, I predict True");
}
if (model === "S600") {
    console.log("Is model S600, I predict false");
}
if (car === "merc" && year === 2023) {
    console.log("Is car Merc and Year 2023, I predict true");
}
if (car === "BMW" && year === 2023) {
    console.log("is car bmw and year 2023, i predict false");
}
if (car === "merc" && model === "S580") {
    console.log("Is car merc and model S580, I predict true");
}
if (car === "merc" && model === "S600") {
    console.log("Is car merc and model S600, I predict false");
}
