function show_magicians_(magicians: Array<string>){
    for(let i = 0; i<magicians.length; i++){
        console.log(magicians[i])
    }
}
function make_great(magicians: Array<string>){
    for(let i = 0; i<magicians.length; i++){
        magicians[i] = "Great " + magicians[i]
    }
}
let mag_:Array<string> = ["aslam", "nawaz sharif", "zardari"]
show_magicians_(mag_)
make_great(mag_)
show_magicians_(mag_)