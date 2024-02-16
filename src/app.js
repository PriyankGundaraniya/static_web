var path = require('path');
var express = require('express');
var app = express();

var staticpath = path.join(__dirname ,"../public")
app.use(express.static(staticpath))
// console.log(path.join(__dirname , "../public"));

app.get('/',(req,res)=>{
    res.send("welcome")
})


app.listen(2000,()=>{
    console.log("done");
})



