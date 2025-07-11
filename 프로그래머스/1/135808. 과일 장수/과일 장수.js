// function solution(k, m, score) {
//     score.sort((a, b) => b - a);
//     let box = [];
//     let cnt = 0;
    
//     while (score.length > 0) {
//         box = score.splice(0, m);

//         if (box.length === m) cnt += box[m - 1] * m;
//     }

//     return cnt;
// }

// 시간 초과 실패.

function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let cnt = 0;

    for (let i = 0; i <= score.length - m; i += m) {
        cnt += score[i + m - 1] * m;
    }
    // m개씩 정확히 나눌 수 있는 범위까지만 반복
    // score[i + m - 1] m개씩 나누어진 상자 중 가장 낮은 점수
    return cnt;
}
