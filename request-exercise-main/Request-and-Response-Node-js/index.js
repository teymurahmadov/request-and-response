const express = require('express')
const app = express()
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const data = [
  {id:"1",name:"Fish",price:"3.00",amount:"10"},
  {id:"2",name:"Water",price:"0.5",amount:"40"},
  {id:"3",name:"Ice-cream",price:"0.7",amount:"12"},
  {id:"4",name:"Bread",price:"0.5",amount:"43"},
  {id:"5",name:"Kit kat",price:"1.5",amount:"26"},
  {id:"6",name:"Fame",price:"2.4",amount:"24"},
  {id:"7",name:"Rexona",price:"1.9",amount:"17"},
  {id:"8",name:"Book",price:"4",amount:"12"},
  {id:"9",name:"Jelibon",price:"1.1",amount:"25"},
  {id:"10",name:"Coca Cola",price:"1.00",amount:"20"},
]

app.get("/",(req, res)=>{
        res.json(data)
})

app.get('/product',(req,res)=>{
    const {count,offset}=(req.query)
    let dataNew=data.slice(Number(offset),Number(offset)+Number(count))
    res.json(dataNew);
})

app.get("/product/:id",(req,res)=>{
        let id = req.params.id
        console.log(req.params.id)
        let newData = data.find(item=>item.id===id)

        console.log(newData)
        if(newData){
            return res.json(newData)
        }
        res.send("Məhsul yoxdur");
})

const PORT =5000
app.listen(PORT,(error)=>{
if(!error){
    console.log(`Server is running on the port ${PORT} `)
}
else{
    console.log("Error occurred");
}
})