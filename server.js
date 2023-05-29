console.log("hello");
console.log("vsdg");
const express=require("express")  //express impiort
const app=express()
const path=require("path");
app.use("/add/one",(req,res,next)=>{
    res.send("<h1>door</h1>")
  })

app.use("/add",(req,res,next)=>{
    res.send("<h1>fdipsak</h1>")
  })
app.use("/",(req,res,next)=>{
  res.sendFile(path.join(__dirname + '/index.html'));

})


app.listen("3001",()=>{
    console.log("server live 3000")
})
