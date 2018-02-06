//Node.js를 배우고 싶어져서 소마센터에 있던 책에 써있던 예제코드를 실행해 본 것
var http = require('http');
http.createServer(function(req, res){
  var path=req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path){
    case '':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello, 0XD happckathon 2018!');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not Found :(');
      break;
  }
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl+C to terminate');
//파일 저장 안 해놓고 서버가 안 열려서 당황했던 기억이... 
