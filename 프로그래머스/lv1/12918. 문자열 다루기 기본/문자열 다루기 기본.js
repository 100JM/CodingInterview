function solution(s) {
    var answer = true;
    
    if(s.length === 4 || s.length === 6){
       
        for(var i = 0; i<s.length; i++){
            if(isNaN(s[i])){
                answer = false;
            }
        }
        
    }else {
        answer = false;
    }
    
    return answer;
}