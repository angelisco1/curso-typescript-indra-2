import fs = require('fs/promises')

const promise1 = fs.readFile('files/1.txt')
const promise2 = fs.readFile('files/2.txt')


promise1
  .then((data) => {
    console.log(data.toString())

    return promise2
  })
  .then((data) => {
    console.log(data.toString())

  })
  .finally(() => {
    console.log('FIN')
  })
  
