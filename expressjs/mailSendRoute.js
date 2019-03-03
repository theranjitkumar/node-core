module.exports = function (app) {
    const EMD = require('./middleware/sendMail');

    app.get('/mailSend', (req, res) => {
        EMD.dispatchMail();
        res.status(200).json({
            status: true,
            message: 'Email Sent'
        });
    })
}