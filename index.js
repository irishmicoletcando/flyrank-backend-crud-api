const express = require('express');

let taskList = [
  {
    "id": 1,
    "title": "Buy grocery",
    "done": true,
  },
  {
    "id": 2,
    "title": "Clean work area",
    "done": false,
  },
  {
    "id": 3,
    "title": "Wash dishes",
    "done": false,
  },
]

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

app.get('/tasks', (req, res) => {
  res.json(taskList);
});

app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = taskList.find(t => t.id === taskId);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
