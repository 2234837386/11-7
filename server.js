let http =require('http')
let fs =require('fs')

const server =http.createServer((req,res)=>{
   if(req.url==='/txt'){
       res.writeHead(200,{'Content-Type':'text/plain'})
       res.end('刘美琴')
   }else if(req.url==='/json'){
       res.writeHead(200,{'Content-Type':'application/json'})
       res.end(JSON.stringify({code:1,list:[1,23]}))
   }else if (req.url==='/jpg'){
       res.writeHead(200,{'Content-Type':'image/jpeg'})
       let imgG= fs.readFileSync('./1.jpg')
       res.end(imgG)
   }
})
server.listen(process.env.PORT ||3000,()=>{
   console.log("ccc");
})
