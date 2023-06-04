const fs = require('fs');
const path = require('path');
const directory = process.argv[2];
const fileExtension = process.argv[3];
fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }
  const filteredFiles = files.filter((file) => path.extname(file) === `.${fileExtension}`);
  filteredFiles.forEach((file) => {
    console.log(file);
  });
});