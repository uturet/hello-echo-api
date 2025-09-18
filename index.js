const express = require('express');
const homeRoutes = require('./routes/homeRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', homeRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
