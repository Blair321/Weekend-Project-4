const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
 
});


// GET /gallery
router.get('/', (req, res) => {
  // code here
  const queryString = `SELECT * FROM "gallery" ORDER BY id ASC;`;
  pool.query(queryString).then((reuslts)=>{
    res.send(reuslts.rows);
  }).catch((err)=>{
    console.log(err);
    res.sendStatus(400)
    
  })
  
})
;

module.exports = router;
