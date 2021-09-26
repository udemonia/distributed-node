const express = require('express');
const cluster = require('cluster');

const app = express();

if (cluster.isMaster){
    cluster.fork()

} else {
    const port = 505;

    const doWork = (duration) => {
        //! use as much cpu as possible for some duration
        const start = Date.now()
        while(Date.now() - start > duration) {
            
        }
    };
    
    
    app.get('/', (req, res, next) => {
        doWork(5000)
        res.send('Hi Bear 🐻')
    });
    
    app.listen(port, () => {
        console.log(`Server Up and Listening: `);
    });
}
