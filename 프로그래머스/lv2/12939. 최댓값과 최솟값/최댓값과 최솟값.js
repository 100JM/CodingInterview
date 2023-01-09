function solution(s) {
    
    var str = s.split(" ");
    
    var max = Number(str[0]);
    var min = Number(str[0]);
    
    for(i=0; i<str.length; i++) {
        if(Number(str[i]) > max){
            max = str[i];            
        }else if(Number(str[i]) < min){
            min = str[i];
        }
    }
    
    var answer = min.toString() + ' ' + max.toString();
    return answer;
}