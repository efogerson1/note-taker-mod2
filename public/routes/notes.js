const notes = require('express').Router();
const {v4: uuidv4} = require('uuid');
const {readFromFile, readAndAppend} = require('../../helpers/fsUtils');


//GET Route for retrieving notes info
//All of these routes start with /api/notes

notes.get('/', (req,res)=>{
console.info(`${req.method} request recieved for notes`);

readFromFile('./db/db.json').then((data)=> res.json(JSON.parse(data)));
});

notes.post('/', (req,res)=> {
    console.info(`${req.method} request to submit note`);

    const {title, text} = req.body;

    if (title && text){
        const newPayload = {
            title,
            text,
            id: uuidv4()
        }
        readAndAppend(newPayload, './db/db.json');

        const response = {
            status: 'success',
            body: newPayload
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }

});

module.exports = notes;
