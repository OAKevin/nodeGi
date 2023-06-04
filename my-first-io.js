const fs = require('fs')
buf=fs.readFileSync(process.argv[2])
const str = buf.toString()
answer = str.split("\n").length
console.log(answer - 1)