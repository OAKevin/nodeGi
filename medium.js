const fs = require('fs');

// Read the contents of the text file
fs.readFile('planets.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  const lines = data.split('\n');
  lines.forEach((line) => {
    console.log(line);
  });
});