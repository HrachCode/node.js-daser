const http = require('http');
const EventEmiter = require('events')
const path = require('path')
const fs = require('fs')




http.createServer(function (req, res) {
    const emiter = new EventEmiter();
    const newEvent = 'somevent';
    const test = 'testevent'

    emiter.on(newEvent,()=>{
        const file = path.join(__dirname + '/demofile1.html')
        fs.readFile(file,(err,data)=>{
            if(err) return res.end('404 error')
            return res.end(data.toString())
        })
        
    })

    emiter.on(test,()=>{
        fs.readFile(path.join(__dirname + '/demofile2.html'),(err,data)=>{
            if(err) return res.end('404 error')
            return res.end(data.toString())
        })
    })

    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url === '/'){
        emiter.emit(newEvent)
    }else if(req.url === '/testurl'){
        emiter.emit(test)
    } 

  
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');