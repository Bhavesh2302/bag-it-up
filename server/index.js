require('dotenv').config()
const {connection} = require('./config/dbconfig')
const express = require('express')
const { Bag } = require('./models/bagModel')
const app = express()

app.use(express.json())

app.get('/',async(req,res)=>{
    res.status(201).send("hello world welcome to the bag shop lets bag it up ");
})


const port = process.env.port || 5500 
app.listen(port, async()=>{
try {
    await connection
    console.log(`server is running on http://localhost:${port}`)
} catch (error) {
    console.log(error)
}
})