require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.get("/home",(req,res)=>{
    res.send("hello")
})

const sendroutes = require('./routes/sms_send');
app.use('/sms', sendroutes) 
app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})
