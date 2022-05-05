var s =0;
for (let index = 2; index < process.argv.length; index++) {
    s=s+ Number(process.argv[index])
    
}

console.log(s)