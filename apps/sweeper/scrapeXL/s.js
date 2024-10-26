
const fs = require('fs');
const path = require('path');

const problemsDir = path.join(__dirname, '..', '..', 'problems');
const outputFile = path.join(__dirname, 'directories.txt');

fs.readdir(problemsDir, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const directories = files
    .filter(file => file.isDirectory())
    .map(dir => dir.name);

  const fileContent = `Total directories: ${directories.length}\n` + directories.join('\n');

  fs.writeFile(outputFile, fileContent, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Directory names and count have been saved to directories.txt');
  });
});

