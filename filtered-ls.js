const dirpath=process.argv[2]
const dirpathEX="."+process.argv[3]
const path = require('path');
const fs = require('fs')
fs.readdir(dirpath, 
    function callback (err, data) {
        for (let index = 0; index < data.length; index++) {
           if (path.extname(data[index])===dirpathEX) {
               console.log(data[index])
           }
            
        }
      
     })

