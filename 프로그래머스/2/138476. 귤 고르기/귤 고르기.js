function solution(k, tangerine) {
    let obj = {}
    
    tangerine.map((e) => (obj[e] = (obj[e] || 0) + 1));
    
    let sorted = Object.values(obj).sort((a, b) => b - a);
    let sum = 0;
    let cnt = 0;
    
    for(const t of sorted) {
        sum += t;
        cnt++
        
        if (sum >= k) {
            break;
        }
    }
    
    return cnt
}