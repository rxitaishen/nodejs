const http = require('http')
const fs = require("fs")
const url = require("url")
const querystring=require('querystring')
const express =require('express')
const insertDB = require('./MongodbLib')
const app = express()
//var i=0;
//app.use(express.static(__dirname+"/public"))//哪个路径在前面就默认哪个是默认的index
//app.use(express.static(__dirname+"/private"))
app.use(express.static(__dirname+'/public'))
var a =''
var name=""
var password=""
var submit=''
//doc = {}
app.get('/input', (req, res,next) => {
    name = req.query.name
    password = req.query.password
    submit = req.query.submit1
    //doc[name] = password
    //res.send('Hello World!')
    a="This is a next() test."
    //res.send('The first')
    console.log(req.query.name)

    if(name.length != 0 && password.length != 0)next()
    else
    res.send("用户名和密码都不能为空，请输入。")
})
app.get('/input', (req, res, next) =>{
    if(submit = '注册'){
        console.log(name)
        insertDB.inserData("mydb","mycollection",[{name:name , password:password}])
    }
    //res.sendFile(__dirname +'/testnew.html')
    res.send(a)
})
//app.get('/input', (req, res,next) => {
 //   res.send(a)
 // })

app.listen(3000)
/*const server = http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/img')
        //var fsData = fs.readFileSync("favicon.ico") 同步的
        fs.readFile("favicon.ico",(err,fsData)=>{//异步的
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
        let url1 = req.url.split("?")
        //console.log(url1[1])
        let obQuery = querystring.parse(url1[1])
        //console.log(obQuery)
        if(obQuery.submit1=='Save'){
            //2.创建并写入文件
            fs.writeFile('./test.txt',obQuery.name1,(err)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('创建写入文件成功')
            })
        }
        else if(obQuery.submit1=='AppendSave'){
            fs.appendFile('./test.txt',obQuery.name1,(err)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('创建写入文件成功')
            })
        }
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        fs.readFile("testform.html",(err,fsData)=>{
            if(err){
                console.log("Read File Error")
                throw err
            }
            res.write(fsData)
            res.end()
        })
        //res.end("submit success!")
    }
    else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        //res.write(req.url)
        i++
        res.write('<h1>This is Wu. You are the '+i+'th visitor</h1>')
        res.end();
    }
});
server.listen(3000);*/
