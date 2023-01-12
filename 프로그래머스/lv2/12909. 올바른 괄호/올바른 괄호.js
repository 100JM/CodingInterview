function solution(s){
    var cnt = 0;
    //if(s[0] === '(' && s[s.length-1] === ')'){
        //answer = true;
    //}else{
        //answer = false;
    //}
    // 효율성 검사 및 채점 실패
    
    for(var i = 0; i<s.length; i++) {
        if(s[i] === '('){
            cnt += 1;
        }else {
            cnt += -1;
        }
        
        if(cnt < 0) {
            return false;
        }
    }
    
    return cnt === 0 ? true : false;
}