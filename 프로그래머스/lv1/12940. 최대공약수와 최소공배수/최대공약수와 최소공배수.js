function solution(n, m) {
    
    var answer = [];
    let num = (n<m ? n : m);
    let max = 1;
    let min = 1;
    
    for(let i = 1; i<=num; i++) {
        if(n%i == 0 && m%i == 0){
            if(max < i){
                max = i;
            }
        }
    }
    
    min = (n * m) / max;
    
    answer.push(max);
    answer.push(min);
    
    return answer;
}