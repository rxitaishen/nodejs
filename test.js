const http = require('http')
const fs = require("fs")
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
    else if (req.url = "/input"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/img')
        res.end("提交成功！")
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