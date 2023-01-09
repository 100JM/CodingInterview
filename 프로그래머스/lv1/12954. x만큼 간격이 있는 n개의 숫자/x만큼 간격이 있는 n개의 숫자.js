function solution(x, n) {
    
    var answer = [];
    var int = 0;
    
    for(var i=1; i<=n; i++){
        int += x;
        answer.push(int)
    }
    
    return answer;
}