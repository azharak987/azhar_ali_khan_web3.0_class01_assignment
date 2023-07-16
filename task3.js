var u_name = "Azhar khan";
console.log("Uppercase Name: ", u_name.toUpperCase());
console.log("Lowercase Name: ", u_name.toLowerCase());
var words = u_name.toLowerCase().split(" ");
for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
var titleCase = words.join(" ");
console.log("Titlecase Name: ", titleCase);
