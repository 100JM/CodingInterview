function solution(n) {
    let nLen = n.toString(2).replaceAll('0', '').length;
    let nextN = n;
    while (true) {
        nextN++;
        
        if (nLen === nextN.toString(2).replaceAll('0', '').length) {
            return nextN;
        }
    }
}