const express = require('express');

// create an Express app
const app = express();

// parsing JSON bodies
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.json({
    name: 'Task API',
    version: '1.0.0',
    endpoints: ["/tasks"],
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
