function solution(n) {
    let answer = '';
    
    let numArray = [...n.toString()];
    
    numArray.sort(function(a, b){
        return b-a;
    })
    
    numArray.map(function(i){
        return answer += i;
    })
    
    return Number(answer);
}