/**
 * Created by garusis on 28/02/18.
 */
const express = require('express');
const router = express.Router();


router.use(function (req, res) {
  res.sendStatus(200)
})


module.exports = router;