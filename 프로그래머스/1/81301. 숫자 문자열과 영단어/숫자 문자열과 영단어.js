function solution(s) {
    let result = '';
    let stringArr = [];
    let str = '';
    const obj = {
        zero : 0,
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven: 7,
        eight: 8,
        nine : 9
    };
    
    for(let i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i]))) {
            result += s[i];
        } else {
            str += s[i];
            
            if (obj[str] !== undefined) {
                result += obj[str];
                str = '';
            }
        }
    }
    
    return parseInt(result);
}