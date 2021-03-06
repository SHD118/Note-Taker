const { readAndAppend, writeToFile, readFromFile } = require("../helpers/fsUtils");
const router = require("express").Router();
const db = require("../db/db.json")
const { v4: uuidv4 } = require('uuid');
const path = require("path")

//  router to handle get req for /notes
router.get("/notes", (req, res) => {
    const dbRoute = path.join(__dirname, '../db/db.json')
    console.log(dbRoute)

    readFromFile(dbRoute)
        .then((data) => {

            res.json(JSON.parse(data));
        }).catch((err) => {
            console.log(err)

        })
    
})
//  router to handle get post req for /notes
router.post("/notes", (req, res) => {

    const dbRoute = path.join(__dirname, '../db/db.json')

    const newNote = req.body;
    newNote.id = uuidv4();

    readFromFile(JSON.stringify(dbRoute))
    readAndAppend(newNote, dbRoute)
            res.json(newNote);

})
//  router to handle get delete req for /notes
router.delete("/notes/:id", (req, res) => {

    const noteID = req.params.id;
    const dbRoute = path.join(__dirname, '../db/db.json')
    readFromFile(dbRoute)
      .then((data) => JSON.parse(data))
        .then((json) => {

        // Make a new array of all tips except the one with the ID provided in the URL
        const result = json.filter((note) => note.id !== noteID);
  
        // Save that array to the filesystem
          writeToFile(dbRoute, result);
          
  
        // Respond to the DELETE request
        res.json(`Item ${noteID} has been deleted 🗑️`);
      });
})




module.exports = router;
