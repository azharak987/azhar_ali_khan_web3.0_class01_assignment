function show_magicians_(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great_(magicians) {
    var great_mag = [];
    for (var i = 0; i < magicians.length; i++) {
        great_mag[i] = "Great " + magicians[i];
    }
    return great_mag;
}
var mag__ = ["aslam", "nawaz sharif", "zardari"];
console.log("Original List");
show_magicians_(mag__);
console.log("Modified List");
show_magicians_(make_great_(mag__));
console.log("Original List");
show_magicians_(mag__);
