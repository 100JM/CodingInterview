class Solution {
    public long solution(long n) {
        
        long sqrRt = (long)Math.sqrt(n);

        if (Math.pow(sqrRt, 2) == n) {
            return (sqrRt + 1) * (sqrRt + 1);
        }
        else {
            return -1;
        }
    }
}