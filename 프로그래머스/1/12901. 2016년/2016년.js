function solution(a, b) {
    let x = `2016-${a}-${b}`;
    return new Date(x).toDateString().slice(0,3).toUpperCase();
}