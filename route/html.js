const router = require("express").Router();
const path = require("path")




// GET Route for feedback page
router.get('/notes', (req, res) => {
    console.log(path.join(__dirname, '../public/notes.html'))
    res.sendFile(path.join(__dirname, '../public/notes.html')) 
}
);


// GET Route for homepage
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;