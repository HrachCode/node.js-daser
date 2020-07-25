const http = require('http');
const EventEmiter = require('events')
const fs = require('fs')
const path = require('path')


http.createServer(function(req,res){
    const emiter = new EventEmiter;
    const newEvent = 'somEvent'
    const test = 'testemiter'
    emiter.on(test,()=>{
        fs.readFile(path.join(__dirname + '/demofile2.htm'),(err,data)=>{
            if(err) return res.end('404 error.')
            return res.end(data.toString())
        })
    })
   
    if(req.url === '/'){
        emiter.emit(newEvent)   
    }else if(req.url = '/testurl'){
     emiter.emit(test)
    }    
   
   
})
.listen(3000,console.log('lisenin 300')
)