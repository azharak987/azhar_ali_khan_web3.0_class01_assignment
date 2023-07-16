function CarInfo(manuf, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manuf: manuf,
        model: model,
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var _b = args_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
console.log(CarInfo("Toyota", "Corolla", ["color", "Silver"], ["year", 2022]));
