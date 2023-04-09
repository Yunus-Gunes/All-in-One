

const fs = require('fs');

const folderPath = './projects/myFolder';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Files in folder:');
  files.forEach(file => {
    console.log(file);
  });
});
