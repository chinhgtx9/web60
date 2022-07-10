// tạo sever đơn giản bằng nodejs


const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcom to homepage');
    }
    else if(req.url === './about'){
        res.end('welcom to aboutPage');
    }else{
        res.end('not found')
    }
});

server.listen(5000)
