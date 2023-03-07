function solution(array, commands) {
    var answer = [];
    
    for(let i = 0; i<commands.length; i++){
        let a = [];
        
        for(let j = (commands[i][0]-1); j<=(commands[i][1]-1); j++) {
            a.push(array[j]);
                       
        }
        
        a.sort(function(a,b){
            return a-b;
        })
        
        answer.push(a[(commands[i][2]-1)]);  
    }
    
    return answer;
}