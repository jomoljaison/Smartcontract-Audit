var express = require('express');
var router = express.Router();

const fs = require('fs');


/* GET home page. */
router.post('/', async function (req, res, next) {


  const { exec } = require('child_process');
  var yourscript = exec('sh mythril.sh',
    (error, stdout, stderr) => {

      console.log("**************************************");
      console.log(stdout);

      console.log("=====================================");
      console.log(stderr);
      let errfilename = "./errors/error.doc";
      console.log("errFILENAME", errfilename);
      fs.writeFile(errfilename, stderr, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
      });
      res.send('audited successfully')


      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    });

});

module.exports = router;
