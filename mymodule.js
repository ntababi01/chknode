const path = require('path');
const fs = require('fs')
module.exports =function (dossname,exfile,callback) {

fs.readdir(dossname,function  (err, list) {
if (err) {
   return callback(err)
}
  return  list.filter(e=>path.extname(e)===exfile)
})
}