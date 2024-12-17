const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

// PUT /gallery/like/:id
router.put('/', (req, res) => {
  // code here
 console.log('in/api/gallery PUT:', req.body, req.query);
 const queryString = `UPDATE "gallery" SET likes=likes+1 WHERE id=$1;`
 const values = [req.query.id];
 pool.query( queryString, values).then((results)=>{
res.sendStatus(200)
 }).catch((err)=>{
  console.log(err);
  res.sendStatus(400)
 })
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
