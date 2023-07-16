function makeTshirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = "I love Typescript"; }
    if (size === 'L' || size === 'M') {
        console.log("Making T shirt of size ".concat(size, " and message ").concat(message));
    }
    else {
        console.log("Making T shirt of size ".concat(size, " and message ").concat(message));
    }
}
makeTshirt('M');
makeTshirt('L');
makeTshirt('S', 'This is PIAIC');
