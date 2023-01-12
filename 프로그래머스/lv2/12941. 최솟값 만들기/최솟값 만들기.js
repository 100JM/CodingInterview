function solution(A,B){
    var answer = 0;
    
    A.sort(function(a, b){
        return a - b;
    })
    
    B.sort(function(a,b){
        return b - a;
    })
    
    answer = A.reduce(function(cur, n, idx){
        return cur += n * B[idx];
    },0)
    
    return answer;
    
    //각 배열의 원소를 곱해서 더했을 때 최솟값을 만들기 위해서는 (가장 작은 수 * 가장 큰 수)를 곱한 수를 더하면 된다는 공식을 검색해보았다. 여기에서 아이디어를 얻어서 첫 번째 배열은 오름차순으로 정렬하고, 두 번째 배열은 내림차순으로 정렬 후 순서대로 곱하여 더하였다.
}