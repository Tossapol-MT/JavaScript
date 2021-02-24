function digitalClock(sec) {
    let h = Math.floor(((sec / 60) / 60));
    let m = Math.floor(((((sec / 60) / 60) - h) * 60));
    let s = Math.round((((((sec / 60) / 60) - h) * 60) - m) * 60);

    let hour = "",
        min = "",
        sec = "";

    if (h >= 24) {
        h = 0;
        if (h % 10 != h) {
            hour = h + ":";
        } else {
            hour = "0" + h + ":";
        }
    }

    if (m % 10 != m) {
        min = m + ":";
    } else {
        min = "0" + m + ":";
    }

    if (s % 10 != s) {
        sec = s;
    } else {
        sec = "0" + s;
    }
    return hour + min + sec;
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));