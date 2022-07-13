const express = require('express');

const mangaRouter = express.Router();


// create danh sach truyen manga

const mangas = [

    {id: 1, name: 'Bay vien ngoc rong'},
    {id: 2, name: 'Doraemon'},
    {id: 3, name: 'Conan'},
]

mangaRouter.get('/', (req, res) => {
    res.send(mangas);
})

mangaRouter.post('/', (req, res) => {
    const newManga = {
        id: `${mangas.length +1}`,
        name: req.body.name,
    }

    mangas.push(newManga)
    res.send(mangas);
})

mangaRouter.put('/', (req, res) => {

   
    for (let i = 0; i < mangas.length; i++){
        if (mangas[i].id === req.body.id){
            const newManga = {
                id: req.body.id,
                name: req.body.name,
            }

            mangas.splice(i,1,newManga);
           
        }
    }
  
    res.send(mangas);
})

mangaRouter.delete('/', (req, res) => {
    for (let i = 0; i < mangas.length; i++){
        if (mangas[i].id === req.body.id){
    
            mangas.splice(i,1);
           
        }
    }
    res.send(mangas);
})

module.exports = mangaRouter;