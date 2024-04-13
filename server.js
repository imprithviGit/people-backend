const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./router');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use('/api', appRouter);

app.use(cors({
    origin: '*', // Change to specific origin if needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
}));

app.options('*', cors()); // Respond to all OPTIONS requests with CORS headers

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
