const http = require('http')
const fs = require("fs")
var i=0;
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        var fsData = fs.readFileSync("testnew.html")
        res.write(fsData)
        res.end
    }
    else if(req.url=="/favicon.ico"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/img')
        var fsData = fs.readFileSync("favico.ico")
        res.write(fsData)
        res.end
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