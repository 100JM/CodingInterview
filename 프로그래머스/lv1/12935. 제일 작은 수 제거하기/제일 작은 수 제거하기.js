function solution(arr) {
    var answer = [];
    
    for(var i = 0; i<arr.length; i++) {
        if(arr[i] != Math.min(...arr)){
            answer.push(arr[i]);
        }
    };
    
    if(answer.length == 0) {
        answer.push(-1);
    }
    
    return answer;
}