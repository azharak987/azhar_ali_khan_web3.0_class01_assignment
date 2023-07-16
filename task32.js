var current_users = ["azhar", "umer", "aslam", "bilal", "ikram"];
var new_users = ["azhar", "hammad", "aslam", "arshad", "abid"];
for (var i = 0; i < new_users.length; i++) {
    for (var j = 0; j < current_users.length; j++) {
        if ((new_users[i].toLowerCase()) === current_users[i].toLowerCase()) {
            console.log("".concat(new_users[i], ", is not available"));
            break;
        }
        else {
            console.log("".concat(new_users[i], " is available"));
            break;
        }
    }
}
