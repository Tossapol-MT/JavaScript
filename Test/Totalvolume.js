function totalVolume() {
    let mul = 1;
    let plus = 0;
    for (let r = 0; r < arguments.length; r++) {
        for (let c = 0; c < arguments[r].length; c++) {
            mul *= arguments[r][c];
        }
        plus += mul;
        mul = 1;
    }
    return plus;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));