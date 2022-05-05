const fs = require('fs')
const filepath=process.argv[2]
fs.readFile(filepath, 
     function callback (err, data) {
        console.log(data.toString().split("\n").length-1)
      })