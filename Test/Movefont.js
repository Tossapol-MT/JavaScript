function capToFront(mes) {
    let up = "";
    let down = "";
    for (let index = 0; index < mes.length; index++) {

        if (mes[index] == mes[index].toUpperCase()) {
            up += mes[index];
        } else {
            down += mes[index];
        }
    }
    return up + down;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));