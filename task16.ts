let guests_: Array<string> = ["Ali", "Azhar", "Khan"]
for(let k = 0; k < guests_.length; k++){
    console.log(`Dear ${guests_[k]}, I would like to invite you to dinner`)
}
console.log(`Mr. ${guests_[0]} can't come to dinner`)

guests_[0] = "Aslam"

for(let k = 0; k < guests_.length; k++){
    console.log(`Dear ${guests_[k]}, I would like to invite you to dinner`)
}

console.log("Got a bigger dinning table\n")
guests_[3] = "Umer"
guests_[4] = "Bilal"
guests_[5] = "Usama"

for(let k = 0; k < guests_.length; k++){
    console.log(`Dear ${guests_[k]}, I would like to invite you to dinner`)
}