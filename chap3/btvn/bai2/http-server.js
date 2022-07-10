const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end(`<h1>day la trang chu</h1>`);
    }else if(req.url === '/about'){
        res.end(`<h1>la thong tin ca nhan</h1>`)
    }else{
        res.end(`<h1>duong dan nay khong ton tai</h1>`)
    }
})

server.listen(5000);
