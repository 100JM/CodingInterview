function solution(s) {
    let answer = [0, 0];
    let sLen = 0;

    while (s.length > 1) {
        sLen = s.length;
        s = s.replaceAll('0', '');
        answer[0]++;
        answer[1] += (sLen - s.length);
        s = s.length.toString(2);
    }
    
    return answer;
}