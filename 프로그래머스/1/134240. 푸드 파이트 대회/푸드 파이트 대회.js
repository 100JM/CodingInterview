function solution(food) {
    let answer = [0];


    food.shift();

    food = food.map((e) => Math.floor(e/2));

    for (let i = food.length-1; i >= 0; i--) {
        for (let j = 0; j < food[i]; j++) {
            answer.push(i+1);
            answer.unshift(i+1);
        }
    }

    return answer.join('');
}