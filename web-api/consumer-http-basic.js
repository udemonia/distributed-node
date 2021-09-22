#!/usr/bin/env node

const server = require('fastify');
const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 4000;


//* each process gets a unique id
console.log(`Worker Process PID = ${process.pid}`);

server.get('/recipes/:id', async (req, reply) => {
    console.log(`Worker Request PID = ${process.pid}`)
    const id = Number(req.params.id)
    if (id !== 42) {
        reply.statusCode = 404;
        return {
            error: 'Resource Not Found'
        }
    }
    return {
        producer_pid: process.pid,
        recipe: {
            id: id,
            name: 'chicken something or another',
            steps: 'throw it ina pot!',
            ingredients: [
                {
                    id: 1,
                    name: 'chicken',
                    quantity: '100 pounds'
                },
                {
                    id: 2,
                    name: 'Sauce',
                    quantity: '20 table spoons'
                }
            ]
        }
    }
})
