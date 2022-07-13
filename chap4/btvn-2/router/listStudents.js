const express = require('express');

const listStudentsRouter = express.Router();

const listStudents = [
    { id: "1", name: 'Nguyen Tuan Anh' },
    { id: "2", name: 'Tran Minh Chinh' }
]

listStudentsRouter.get('/',(req, res)=>{
    res.send(listStudents)
})

listStudentsRouter.post('/',(req, res)=>{

    const newStudent = { 
        id: `${parseInt(listStudents.length +1)}`,
        name: req.body.name
    }

    listStudents.push(newStudent);
    res.send(listStudents);
})

listStudentsRouter.put('/',(req, res)=>{
    
    for (let i = 0; i < listStudents.length; i++){
        if (listStudents[i].id === req.body.id){
            const newStudent = {
                id: req.body.id,
                name: req.body.name,
            }

            listStudents.splice(i,1,newStudent);
           
        }
    }
    res.send(listStudents);

})

listStudentsRouter.delete('/',(req, res)=>{
    for (let i = 0; i < listStudents.length; i++){
        if (listStudents[i].id === req.body.id){
    
            listStudents.splice(i,1);
           
        }
    }
    res.send(listStudents);
})


module.exports  = listStudentsRouter;