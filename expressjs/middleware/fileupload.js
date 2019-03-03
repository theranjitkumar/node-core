const multer = require('multer');

// FILE UPLOAD MIDDLEWARE
var Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'expressjs/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' +file.originalname + '_' + Date.now() + '.png')
    }
})
const upload = multer({
    storage: Storage
});
const profileImg = upload.single('profileImg');
// FILE UPLOAD MIDDLEWARE END
module.exports = profileImg;
