function removeDups(arr) {
    let mes = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                mes += 1;
            }
        }

    }

    for (let d = 0; d < mes; d++) {
        arr.pop();
    }
    return arr;
}
console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Teylor", "John"]));