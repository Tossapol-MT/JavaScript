function simplePair(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let a = arr[i];
            let b = arr[j];
            if (a * b === sum) {
                return [a, b];
            }
        }
    }
    return null;
}
console.log(simplePair([1, 2, 3], 3))
console.log(simplePair([1, 2, 3], 6))
console.log(simplePair([1, 2, 3], 9))