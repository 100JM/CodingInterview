function solution(number, limit, power) {
    let x = [0];

    for(let i = 1; i <= number; i++) {
        let cnt = 0;

        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                if (i / j === j) cnt += 1;
                else cnt += 2;
            }
        }

        cnt > limit ? x.push(power) : x.push(cnt);
    }

    return x.reduce((a, c) => a += c, 0);
}