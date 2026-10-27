// Tasks 4-6: Express server with routes and a 404 handler
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// GET / -> welcome text
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Node.js and Express server!');
});

// GET /about -> JSON with name and section
app.get('/about', (req, res) => {
  res.status(200).json({ name: 'Allamraju Abhyas', section: 'CSE-1A' });
});

// GET /time -> current date and time
app.get('/time', (req, res) => {
  res.status(200).send(`Current date and time: ${new Date()}`);
});


// 404 handler - must be last
app.use((req, res) => {
  res.status(404).json({ error: '404 - Page Not Found', path: req.url });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
