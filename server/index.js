const express = require('express');
const mongoose =  require('mongoose');
const app = express()  ;

const bodyParser = require("body-parser");
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()) //this line suckssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

mongoose.connect(`mongodb+srv://ValueWealth:Vivek_2021@cluster0.hxv9z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

const schema = mongoose.Schema({
    FirstName : String,
    LastName : String,
    Type_of_event :String,
    Email : String,
});

const Participants = mongoose.model('Participant',schema);


app.get('/users',function (req,res) {
    Participants.find({},function (err,foundItems) {
        if (err) {
            console.log(err);
        } else {
            res.send(foundItems)
            return foundItems;
        }
    })
    
})

app.post('/registerme',(req,res)=>
{
    const member = new Participants(
        {
            FirstName : req.body.fname,
        LastName : req.body.lname,
        Type_of_event :req.body.event,
        Email : req.body.email,
        }
    )
    member.save(function(err,result)
    {
        if(err)
        console.log(err);
        else
        {
            return result;
        }
       
    })   
})


app.listen(4000,function (req,res) {
    console.log("listening on port 4000");
    
})