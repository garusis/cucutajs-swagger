/**
 * Created by garusis on 28/02/18.
 */
const express = require('express');
const bookRoutes = require('./book');



const router = express.Router();
router.use('/book', bookRoutes);



module.exports = router;