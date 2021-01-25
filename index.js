const express = require('express')

const server = express()
const router = express.Router()

router.use('/price', (req, res, next)=> {
    res.json({price : 40000});
    next();
})
router.get('/users', (req, res, next)=>{
    res.json({name: "Dewa Dwi", email: "Dewadwi@hotmail.com"})
    next();
})
server.use('/', router)
server.listen(4000)