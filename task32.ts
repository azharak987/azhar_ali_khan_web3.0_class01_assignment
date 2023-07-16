let current_users: Array<string> = ["azhar", "umer", "aslam", "bilal", "ikram"]
let new_users: Array<string> = ["azhar", "hammad", "aslam", "arshad", "abid"]

for(let i = 0; i< new_users.length; i++){
    for(let j = 0; j<current_users.length; j++){
        if((new_users[i].toLowerCase()) === current_users[i].toLowerCase()){
            console.log(`${new_users[i]}, is not available`)
            break;
        }
        else{
            console.log(`${new_users[i]} is available`)
            break
        }
    }
}