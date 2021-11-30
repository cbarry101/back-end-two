const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const cntrl = require('./controller.js')


app.get('/api/houses', cntrl.getHouses)
app.delete('/api/houses/:id', cntrl.deleteHouse)
app.post('/api/houses', cntrl.createHouse)
app.put('/api/houses/:id', cntrl.updateHouse)


app.listen(4004,()=>{
    console.log('Running on port 4004')
})