const fs = require('fs')
const filepath=process.argv[2]
const data=fs.readFileSync(filepath)
console.log(data.toString().split("\n").length-1)