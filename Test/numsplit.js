function numberSplit(num) {

    if (num % 2 == 0) {
        return [num / 2, num / 2];
    } else {
        return [Math.floor(num / 2), Math.floor((num / 2)) + 1];
    }
}

console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))