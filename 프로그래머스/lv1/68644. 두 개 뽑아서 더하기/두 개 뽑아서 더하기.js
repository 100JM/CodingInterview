function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i<numbers.length; i++) {
        for(let j = i+1; j<numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    
    answer.sort(function(a,b){
        return a-b;
    })
    
    //ES6에 나온 문법 Set -> 배열의 중복을 제거한 후 객체로 반환
    let set = new Set(answer);
    
    answer = [...set];
    return answer;
}