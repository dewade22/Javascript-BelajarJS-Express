const express = require('express')

const server = express()
server.use(()=>{
    console.log('Hello Server')
    console.log('Hello 2')
    console.log('Hello 3')
})
server.listen(4000)