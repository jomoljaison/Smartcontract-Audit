
var express = require('express');

var multer = require('multer');

var router = express.Router();
const fileUpload = require('express-fileupload');
router.use(fileUpload());

  router.post('/', (req, res) => {
	if (req.files) {
		const file = req.files.file
		const fileName = file.name
		file.mv(`${__dirname}/upload/${fileName}`, err => {
			if (err) {
				console.log(err)
				res.send('There is error')
			} else {
				res.send('uploaded successfully')
			}
		})
	} else {
		res.send('There are no files')
	}


});

module.exports = router;
