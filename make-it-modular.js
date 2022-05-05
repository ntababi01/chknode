const kadha=require('./mymodule')
const dirpath=process.argv[2]
const dirpathEX="."+process.argv[3]
kadha(dirpath,dirpathEX,function callback(err,data) {
    if (err) {
       return console.error(err)
    }
    data.map(e=>console.log(
        e
    ))
})