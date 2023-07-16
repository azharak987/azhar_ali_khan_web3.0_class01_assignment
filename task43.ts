function show_magicians__(magicians: Array<string>){
    for(let i = 0; i<magicians.length; i++){
        console.log(magicians[i])
    }
}
function make_great_(magicians: Array<string>): Array<string>{

    let great_mag: Array<string> = []
    for(let i = 0; i<magicians.length; i++){
        great_mag[i] = "Great " + magicians[i]
    }
    return great_mag
}
let mag__:Array<string> = ["aslam", "nawaz sharif", "zardari"]
console.log("Original List")
show_magicians_(mag__)
console.log("\n\nModified List")
show_magicians_(make_great_(mag__))
console.log("\n\nOriginal List")
show_magicians_(mag__)