const http = require('http')
const fs = require("fs")
const url = require('node:inspector')

const port = 3000
const server = http.createServer((req, res) => {
  if(req.url=="/"){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    fs.readFile("./form1.html",(err,fsData)=>{
      if(err){
        console.log("err")
        throw err
      }
      res.write(fsData)
      //res.write('<h1>Root</h1>')
      res.end()
    })
  }else if(req.url==="/Favicon.ico"){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/img')
    fs.readFile("./favico.ico",(err,fsData)=>{
      if(err){
        console.log("err")
        throw err
      }
      res.write(fsData)
      //res.write('<h1>Root</h1>')
      res.end()
    })
  }else if(req.url.slice(0,6)=="/input"){
    res.statusCode = 200
    //url1 = new url
    //let queryData = url1.parse(req.url,true).query

    res.setHeader('Content-Type', 'text/html')
    res.write(queryData.name123)
    //res.write(req.url)
    res.end("submit success!")
  }else{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>First Vistior</h1>')
    //res.write(req.url)
    res.end()
  }
  
})

server.listen(port)
console.log("启动成功...")