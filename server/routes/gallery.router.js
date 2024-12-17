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
  
})
;

module.exports = router;
