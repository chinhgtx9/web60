// use express create a basic server

const express = require('express');
const app = express();
const port = 5000;
const mangaRouter = require('./router/mangaRouter')



app.use(express.json());

app.use('/api/manga', mangaRouter)

app.listen(port,() =>{
    console.log('listening on port', port);
});
