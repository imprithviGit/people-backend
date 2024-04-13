const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./router');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use('/api', appRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
