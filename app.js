require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const cors = require('cors')
const helmet = require('helmet')



app.use(express.json())
app.use(express.urlencoded({extended:true}))


const sendRouter = require('./router')


const port = process.env.PORT || 5000

app.use(helmet())
app.use(cors())


app.use('/api/v1/sendMsg',sendRouter)



app.listen(port,()=> console.log(`listening on port ${port}`))