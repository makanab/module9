
const express = require('express');
const bodyparser = require('body-parser');
const app = express();


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use((req,res,next)=>{
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Method','GET,POST,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Origin,Content-Type,Accept');
    next();
    res.send('This is the response from Express!!');
});


//get student data
app.get('/students',(req,res,next)=>{
    const student = [
        {"id":"1","firstName":"John","lastName":"Dow"},
        {"id":"2","firstName":"Ann","lastName":"Smith"},
        {"id":"3","firstName":"Joan","lastName":"Doe"}
    ];
    res.json(student);
})


// post student data

app.post('/students',(req,res,next)=>{
    const student =  req.body;
    console.log(student.firstName +" "+ student.lastName);
    res.status(201).send('Posted Successfully');
})




module.exports = app;
