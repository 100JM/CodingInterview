function solution(sizes) {
    let a = [];
    let b = [];

    sizes = sizes.map((e) => e.sort((a,b) => b-a));

    for (const c of sizes) {
        a.push(c[0]);
        b.push(c[1]);
    }

    a.sort((a,b) => b-a);
    b.sort((a,b) => b-a);

    return a[0] * b[0];

}