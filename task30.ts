let usernames: Array<string> = ["azhar", "umer", "aslam", "admin", "ikram"]
for(let o = 0; o<usernames.length; o++){
    if(usernames[o] === "admin"){
        console.log(`Hey Admin, would you like to see status report`)
    }
    else{
        console.log(`Hey ${usernames[o]}, Thanks for loging in again`)
    }
}