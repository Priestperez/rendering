var http = require('http')
var fs = require('fs')

  http.createServer(function(req, res){
    if (req.url === '/'){
res.writeHead(200,{'content-Type': 'text/html'})
fs.createReadStream(__dirname + '/Home-page.html').pipe(res)
    }
    else if(req.url === '/Contact'){
        res.writeHead(200,{'content-Type': 'text/html'})
fs.createReadStream(__dirname + '/Contact.html').pipe(res)
    }
else if (req.url === '/About'){
    res.writeHead(200,{'content-Type': 'text/html'})
fs.createReadStream(__dirname + '/About.html').pipe(res)
}
else{
    return console.log('not found')
}
  }).listen(4000)