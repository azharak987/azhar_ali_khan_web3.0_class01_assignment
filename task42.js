function show_magicians_(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "Great " + magicians[i];
    }
}
var mag_ = ["aslam", "nawaz sharif", "zardari"];
show_magicians_(mag_);
make_great(mag_);
show_magicians_(mag_);
