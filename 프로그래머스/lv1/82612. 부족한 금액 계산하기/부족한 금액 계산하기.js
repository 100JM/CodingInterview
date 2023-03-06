function solution(price, money, count) {
    
    let sum = 0;
    
    for(var i = 1; i<=count; i++){
        sum += price * i;
    }
    
    return sum > money ? sum - money : 0;
}