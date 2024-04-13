const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./router');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use('/api', appRouter);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 })

 app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
