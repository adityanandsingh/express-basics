//imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//app instance & PORT
const app = express();
const PORT = 5000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//basic route

app.get('/', (req, res ) => {
    res.send("Hello World");
});

//start server and listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});