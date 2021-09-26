
const fs = require('fs');

const bufferFileData = fs.readFileSync('./test.json');

console.log(bufferFileData) //! will print out <Buffer of bytes>

{/* <Buffer 7b 0a 20 20 20 20 22 73 75 63 63 65 73 73 22 3a 20 74 72 75 65 2c 0a 20 20 20 20 22 64 61 74 61 22 3a 20 7b 0a 20 20 20 20 20 20 20 20 22 4f 6e 65 22 ... 33 more bytes> */}

const objectiveData = JSON.parse(bufferFileData); //! typeof object

const stringData = JSON.stringify(objectiveData, null, 2) //! string


console.log(stringData)