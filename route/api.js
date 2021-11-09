const { readAndAppend, writeToFile, readFromFile } = require("../helpers/fsUtils");
const router = require("express").Router();
const db = require("../db/db.json")
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
    
    res.json(db)
})

router.post("/notes", (req, res) => {
    
    res.json(db)
})

router.delete("/notes", (req, res) => {
    
    res.json(db)
})




module.exports = router;
