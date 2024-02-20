//let fs =require('fs')
//fs.readFile('./FILESYSTEM/topics.txt',(err,data)=>{
  //  if(err){
   //     console.log("there is no text message")
   // }
   // else{
       // console.log(data.toString())
   // }
//})
//console.log("before reading")

/*const fs =require('fs')
const { before } = require('node:test')
const data = fs.readFileSync('./FILESYSTEM/topics.txt')
console .log (data.toString())
console.log ("before reading")*/

/*let fs =require('fs')
fs.appendFile('./FILESYSTEM/topics3.txt',"my name is srikanth",(err)=>{
   if(err){
       console.log("there is no text message")
    }
    else{
       console.log("write success")
    }
})
console.log ("before reading")*/

/*let fs =require('fs')
fs.unlinkSync('./FILESYSTEM/topics3.txt',(err)=>{
   if(err){
       console.log("delete not sccess")
    }
    else{
       console.log("delete success")
    }
})
console.log ("before reading")*/

/*const fs =require('fs')
fs.mkdir('./FILESYSTEM/display/test',(err)=>{
   if(err){
       console.log("creation of folder not success")
    }
    else{
       console.log("creation of folder is success")
    }
})
console.log ("before reading")*/

/*const fs =require('fs')
fs.rmdir('./FILESYSTEM/display',(err)=>{
   if(err){
       console.log("folder  does not deleted ")
    }
    else{
       console.log("deletion of folder is success")
    }
})
console.log ("before reading")*/

const fs =require('fs')
fs.readdir('./FILESYSTEM/display',(err,data)=>{
   if(err){
       console.log("the folder was not read success fully ")
    }
    else{
       console.log("the folder  was readed  success fully");
       console.log(data)
       for( f of data){
        fs.readdir('./FILESYSTEM/display/'+f,(err,subdata)=>{
            if(err)
            console.log(err)
        else
            console.log(subdata)
        })
       }
    }
    })
console.log ("before reading")