function solution(k, score) {
    let arr = [
        [score[0]]
    ];
    
    for (let i = 1; i < score.length; i++) {
        arr.push(arr[i-1].concat(score[i]));
        
        arr[i] = arr[i].sort((a, b ) => b - a);
        
        if (arr[i].length > k) {
            arr[i].pop();
        }
    };
    
    return arr.map((e) => e[e.length -1]);
}