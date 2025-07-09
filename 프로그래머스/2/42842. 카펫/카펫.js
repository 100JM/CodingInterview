function solution(brown, yellow) {
    let sum = brown + yellow;
    let i = 3;
    let answer = [];

    while(true) {
        let y = sum / i;
        if ((y >= i) && (sum % i === 0) && ((i-2) * (y-2) === yellow)) {
            answer[0] = y;
            answer[1] = i;
            
            return answer
        }
        
        i++;
    }
}