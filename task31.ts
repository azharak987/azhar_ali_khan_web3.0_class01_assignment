let usernames_: Array<string> = ["azhar", "umer", "aslam", "admin", "ikram"]
if(usernames_.length != 0){
for(let o = 0; o<usernames_.length; o++){
    if(usernames_[o] === "admin"){
        console.log(`Hey Admin, would you like to see status report`)
    }
    else{
        console.log(`Hey ${usernames_[o]}, Thanks for loging in again`)
    }
}
}
else{
    console.log("we need to find some users")
}