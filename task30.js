var usernames = ["azhar", "umer", "aslam", "admin", "ikram"];
for (var o = 0; o < usernames.length; o++) {
    if (usernames[o] === "admin") {
        console.log("Hey Admin, would you like to see status report");
    }
    else {
        console.log("Hey ".concat(usernames[o], ", Thanks for loging in again"));
    }
}
