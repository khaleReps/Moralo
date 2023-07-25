const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // Change this to your desired port number

// Serve static files (e.g., your HTML, CSS, and client-side JS files)
app.use(express.static('public'));

// Endpoint to fetch the current directory content
app.get('/file_list', (req, res) => {
  const currentDirectory = './'; // Change this to the directory you want to read (e.g., './my_directory')
  fs.readdir(currentDirectory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      res.status(500).json({ error: 'Failed to read directory' });
    } else {
      const fileList = files.map(file => ({ name: file }));
      res.json(fileList);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
