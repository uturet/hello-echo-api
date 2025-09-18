const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic "Hello World" endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Echo endpoint: sends back whatever was sent in request body
app.post('/echo', (req, res) => {
  res.json({
    received: req.body
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
