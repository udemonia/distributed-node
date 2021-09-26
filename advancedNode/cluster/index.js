process.env.UV_THREADPOOL_SIZE = 1
//? Every Child cluster has a libuv thread pool of 1 instead of 4
const express = require('express');
const cluster = require('cluster');
const crypto = require('crypto');

const app = express();

//? is the file being executed in Master mode? 
if (cluster.isMaster){
    //? if yes, execute again in child mode
    cluster.fork()
    cluster.fork()
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
} else {
    //? if not master, handle server functions per usual
    const port = 505;

    app.get('/', (req, res, next) => {
        //! simulating work by calculating a hash
        crypto.pbkdf2('a', 'b', 10000, 512, 'sha256', () => {
            console.log('Hash Done!')
            res.send('Hi Bear 🐻')
        })
    });
    app.get('/fast', (req, res, next) => {
        res.send('Hi Bear 🐻')
    });
    app.listen(port, () => {
        console.log(`Server Up and Listening: `);
    });
}

