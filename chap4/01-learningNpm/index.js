const jsonExport = require('jsonexport');

const contacts = [
    {
        name:'Tran Minh CHinh',
        age: 18,
        courseName: 'Web FullStack'
    }, 

]


jsonExport(contacts,function(err, csvContacts) {
    if (err) return console.error(err);
    console.log(csvContacts);
});