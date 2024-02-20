const express = require('express');

const add = express();


add.listen(2014,()=>{

    console.log(" the server has been started")
})
add.get('/sri',(req,res)=>{

    res.send("Hai this is srikanth the file received for get request")
})
add.post('/sri',(req,res)=>{

    res.send("Hai this is srikanth the file received for post request")
})

add.put('/sri',(req,res)=>{

    res.send("Hai this is srikanth the file received for put request")
})
add.delete('/sri',(req,res)=>{

    res.send("Hai this is srikanth the file received for delete request")
})