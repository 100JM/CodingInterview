function solution(num) {
    var answer = 0;
    
    if(num === 1){
       return answer; 
    }else{
        while(num != 1){
            if(num % 2 === 0){
                num = num / 2;
            }else{
                num = (num * 3) + 1;
            }
            
            answer += 1;
        }
        
        return ((answer > 500) ? -1 : answer);
    }
 
}