const express = require('express');
const app = express();
// file upload routes importing
const fileuploadRoute = require('./expressjs/fileuploadRoute');
const sendMailRoute = require('./expressjs/mailSendRoute');

const port = process.env.port || 3000

app.use('/expressjs/public',express.static('public'));

fileuploadRoute(app);
sendMailRoute(app);

app.listen(port, () => console.log(`server running on port${port}`))