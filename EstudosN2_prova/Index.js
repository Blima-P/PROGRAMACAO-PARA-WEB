import express from 'express';

const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/pedro', (req, res) => {
  res.send('Hello, pedro!');
});

app.get('/users', (req, res) => {
    res.json({
      ...users
    });
});

app.delete('/users/:id', (req, res) => {  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});