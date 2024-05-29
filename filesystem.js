//The Node.js file system module allows you to work with the file system.
//Common uses for the file system module are read, create, update, delete and rename files.

//To include the file System module, use the require() method
var fs = require('fs');

//File System Module updates files using the appendFile() method.
fs.appendFile('filesystem.txt', ' This is an addition.', function (err) {
if (err) throw err;
console.log('File Updated!');
});

//File System Module deletes files using the fs.unlink() method.
fs.unlink('filesystem.txt', function (err) {
if (err) throw err;
console.log('File Deleted!');
});
