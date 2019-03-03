module.exports = function (app) {
    const profileImg = require('./middleware/fileupload');

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    })

    app.post('/upload', profileImg, (req, res, next) => {
        console.log(req.file)
        res.status(200).json({
            status: true,
            message: 'Upload successfull...',
            data: {
                profileImg: req.file.path,
            }
        });
    });
}