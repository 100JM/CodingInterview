function solution(a, b, n) {
    let x = 0;
    let y = 0;
    
    while (true) {
        x = Math.floor(n / a) * b;
        y += x;
        n = x + Math.floor(n % a);
        
        if (n < a) {
            return y;
        }
        
    }
}