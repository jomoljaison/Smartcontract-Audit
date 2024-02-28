var express = require('express');
var multer = require('multer');
var path = require('path');
var router = express.Router();


router.get('/', (req, res) => {
    res.download("./errors/error.doc");
  });
  module.exports = router;
  