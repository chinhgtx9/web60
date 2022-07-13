const express = require('express');
const app = express();
const port = 5000;
const listStudentsRouter = require('./router/listStudents');

app.use(express.json());

app.use('/api/list',listStudentsRouter );

app.listen(port,()=>{
    console.log('listening on port',port);
});