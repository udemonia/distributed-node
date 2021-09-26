const fs = require('fs')

//Micro task
//? Q1 Process Next Tick
//? Q2 Promises
// Non Micro Task
//? Q3 setTimeout
//? Q4 I/O
//? Q5 check
//? Close


//! Async queue 3 
setTimeout(() => {
    console.log('1: Set Timeout')
}, 0);
//! Async queue 4
fs.readFile('./setImmediateVsNextTick.js', () => console.log('2: file Read'))

//! Async 5
setImmediate(() => console.log('3: SetImmediate'))


console.log('4: Sync First Console log')

//! Async queue 1
process.nextTick(()=>console.log('5: Process.nextTick'))

//! Async queue 2
const myPromise = new Promise(( resolve, reject ) => {setTimeout(() => {
    console.log('6: promise')
}, 0);})

//*    Sync First Console log
//*    Process.nextTick - 1
//*    Set Timeout - 2
//*    promise - 3
//*    SetImmediate - 4
//*    file Read - 5