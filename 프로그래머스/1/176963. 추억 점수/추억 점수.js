function solution(name, yearning, photo) {
    let answer = [];

    for (const p of photo) {
        let cnt = 0;

        for (let i = 0; i < p.length; i++) {
            if (name.includes(p[i])) {
                cnt += yearning[name.indexOf(p[i])];
            }
        }

        answer.push(cnt);
    }

    return answer;
}