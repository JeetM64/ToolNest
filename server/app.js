const express = requre('express')
const cors = require('cors')
const dotnet = require('dotenv');
const { model } = require('mongoose');

dotnet.config();

const app = express()

// middleware 
app.use(cors())
app.use(express.json())


app.get("/api/health",(req,res)=>{
    req.json({status :'server is running'})
})


model.export = app
