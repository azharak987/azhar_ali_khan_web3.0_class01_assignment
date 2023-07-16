let guests__: Array<string> = ["Ali", "Azhar", "Khan"]
for(let k = 0; k < guests__.length; k++){
    console.log(`Dear ${guests__[k]}, I would like to invite you to dinner`)
}
console.log(`Mr. ${guests__[0]} can't come to dinner`)

guests__[0] = "Aslam"

for(let k = 0; k < guests__.length; k++){
    console.log(`Dear ${guests__[k]}, I would like to invite you to dinner`)
}

console.log("Got a bigger dinning table\n")
guests__[3] = "Umer"
guests__[4] = "Bilal"
guests__[5] = "Usama"

for(let k = 0; k < guests__.length; k++){
    console.log(`Dear ${guests__[k]}, I would like to invite you to dinner`)
}

console.log("Bigger table can't arrive on time");

for(let l = 0; l<=guests__.length; l++){
    console.log("Popped: ", guests__.pop())
}

for (let l= 0; l<guests__.length; l++){
    console.log(`${guests__[l]}, You are still invited`)
}

for(let l = 0; l<=guests__.length; l++){
    console.log("Popped: ", guests__.pop())
}

console.log("Empty List: ",guests__);