const express= require('express');
const bodyparser=require('body-parser');
const path=require('path');
const http=require('http');
const app=express();
require('dotenv').config()
//

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//react build output folder
app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'));
})

app.get('/product',(req,res)=>{
    res.send('hii')
})

const port=process.env.PORT||'3046';
app.set('port',port);
const server=http.createServer(app);
server.listen(port,()=>console.log(`Running on localhost:${port}`));