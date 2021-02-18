function highesDigit(num) {
    let char = num.toString().split("");
    let highes = 0
    for (let index = 0; index < char.length; index++) {
        if (highes < char[index]) {
            highes = char[index];
        }
    }
    return highes;
}

console.log(highesDigit(379))
console.log(highesDigit(2))
console.log(highesDigit(377401))
console.log(highesDigit(3778401))