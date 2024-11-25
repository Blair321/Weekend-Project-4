const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const picID = [req.params.id];

  let queryText = `
  UPDATE "gallery" SET "likes"="likes" +1
  WHERE id=$1;
  `;

  pool
  .query(queryText, [picID])
  .then((response) => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.error("Error making PUT query", err);
    res.sendStatus(500);
  }); 
});


// GET /gallery
router.get('/api/gallery', (req, res) => {
  // code here
  const sqlText = `SELECT * FROM gallery ORDER BY "title";`;
  // what are we selecting from the server

pool.query(sqlText)
  .then((dbResult) => {
      console.log(`dbResult.rows is:`, dbResult.rows);
      res.send(dbResult.rows);
  })
  .catch((dbError) => {
      console.log(`dbError making database query ${sqlText}`, error);
      res.sendStatus(500);
  })
})
;

module.exports = router;
