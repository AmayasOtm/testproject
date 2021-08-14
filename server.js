const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

const app = express()

app.set('view engine','ejs')

const database_link = "mongodb+srv://natomi:amayas@tut.pcvss.mongodb.net/node-tutorial?retryWrites=true&w=majority"

mongoose.connect(database_link, {useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>{app.listen(3000,(err)=>{if(err)console.log('err')})})
    .catch((err)=>{console.log(err)})

app.get('/',(req,res) =>
{
    const blog = new Blog(
        {
            title:'title',snippet:'snippet',body:'body body'
        }
    )
    blog.save()
        .then((result) =>
            {
                res.send(result);
            })
        .catch((err)=>
        {
            console.log(err)
        })

})
