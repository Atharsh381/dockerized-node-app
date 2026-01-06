const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Dockerized Node.js App!</h1><p>This is running in a container.</p>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1><p>Built with Express and Docker multi-stage builds.</p>');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
