const fs = require('fs')

const folder = 'src/assets/img'

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    let newName = file.replace('-', '_');
    fs.rename(`${folder}/${file}`, `${folder}/${newName}`, (err) => {
      if (err) throw err;
      console.log(`${file} renamed to ${newName}`);
    })
  })
})