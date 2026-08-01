const express = require('express');

// create an Express app
const app = express();

// parsing JSON bodies
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, FlyRank!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
