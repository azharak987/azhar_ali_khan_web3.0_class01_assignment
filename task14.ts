let guests: Array<string> = ["Ali", "Azhar", "Khan"]
for(let k = 0; k < guests.length; k++){
    console.log(`Dear ${guests[k]}, I would like to invite you to dinner`)
}
console.log(`Mr. ${guests[0]} can't come to dinner`)

guests[0] = "Aslam"

for(let k = 0; k < guests.length; k++){
    console.log(`Dear ${guests[k]}, I would like to invite you to dinner`)
}