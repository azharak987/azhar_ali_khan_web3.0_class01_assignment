function make_sandwich(items) {
    console.log("The sandwich has these items: ");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log("\n");
}
var items = ["Olives", "Chicken", "Ketchup", "BBQ Sauce", "Mayonise"];
make_sandwich(items);
items = ["Olives", "Chicken", "BBQ Sauce", "Mayonise"];
make_sandwich(items);
items = ["Olives", "Chicken", "BBQ Sauce"];
make_sandwich(items);
