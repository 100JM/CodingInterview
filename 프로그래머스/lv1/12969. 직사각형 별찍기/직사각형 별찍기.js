process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let c = '';
    
    for(let j = 1; j<=a; j++) {
        c += '*';
    }
    
    for(let i = 1; i<=b; i++) {
        console.log(c);
    }
    
});