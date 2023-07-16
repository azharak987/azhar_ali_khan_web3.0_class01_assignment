function make_sandwich(items: Array<string>){
    console.log("The sandwich has these items: ")
    for(let i = 0; i<items.length; i++){
        console.log(items[i])
    }
    console.log("\n")
}

let items: Array<string> = ["Olives", "Chicken", "Ketchup", "BBQ Sauce", "Mayonise"]

make_sandwich(items)
items = ["Olives", "Chicken", "BBQ Sauce", "Mayonise"]
make_sandwich(items)
items = ["Olives", "Chicken", "BBQ Sauce"]
make_sandwich(items)