function solution(arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<arr1.length; i++){
        let sum = [];
        
        if(arr1[0].length > 1){
            for(let j=0; j<arr1[0].length; j++){
                sum.push(arr1[i][j] + arr2[i][j]);
            }
        }else{
            sum.push(Number(arr1[i]) + Number(arr2[i]));
        }
        answer.push(sum);
    }
   
    return answer;
}