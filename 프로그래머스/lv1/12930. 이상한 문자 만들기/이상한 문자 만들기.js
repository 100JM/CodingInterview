function solution(s) {
    var answer = '';
    
    let sArry = s.split(' ');
    
    for(let i = 0; i<sArry.length; i++) {
        for(let j = 0; j<sArry[i].length; j++) {
            if(j%2 == 0){
                answer += sArry[i][j].toUpperCase();
            }else{
                answer += sArry[i][j].toLowerCase();
            }
            
            
        }
        
        if(i < sArry.length -1) {
            answer += ' ';
        }
        
    }
    
    return answer;
}