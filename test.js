const http = require('http')
const fs = require("fs")
const url = require("url")
const querystring=require('querystring')
var i=0;
const server = http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/img')
        //var fsData = fs.readFileSync("favico.ico") 同步的
        fs.readFile("favico.ico",(err,fsData)=>{//异步的
            if(err){
                console.log("Read File Error")
                throw err
            }
            //console.log("1")
            res.write(fsData)
            res.end()
        })
        //console.log(2)
        //看见1和2的出现顺序说明回调函数是先执行完主流程，再去执行这个回调函数
    }
    else if(req.url=="/"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        //var fsData = fs.readFileSync("testnew.html")//同步的
        fs.readFile("testform.html",(err,fsData)=>{
            if(err){
                console.log("Read File Error")
                throw err
            }
            res.write(fsData)
            res.end()
        })
    }
    else if (req.url.slice(0,6)== "/input"){
        res.statusCode = 200;
        let url1 = req.url.split("?")
        let urlquery = url1[1].split("&")
        let firstQuery = urlquery[0].split("=")
        let secondQuery = urlquery[1].split("=")
        //let queryData = url1.parse(req.url,true).query
        
        res.setHeader('Content-Type', 'text/html')
        res.write(firstQuery[1]+"<br>")
        res.write(secondQuery[1]+"<br>")
        res.end("submit success!")
    }
    else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        //res.write(req.url)
        res.write('<h1>This is Wu. You are the '+i+'th visitor</h1>')
        res.end();
    }
    
    i++;
    console.log("req.url")
});
server.listen(3000);