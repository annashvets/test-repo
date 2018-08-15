/*File System Module
1 Create a file using open()
2 Update created file using appendFile
3 Update created file using writeFile()
4 ReadFile() and output its value*/

//1
var fs = require('fs');

fs.open('new_file.txt', 'w', 
function(err, file){
    if (err) throw err;
    console.log('Created!');
});

//2

fs.appendFile('new_file.txt', 'file updated by appendFile', function(err){
    if (err) throw err;
    console.log('Updated!')
});

//3

fs.writeFile('new_file.txt', 'added string by writeFile ', function(err){
    if (err) throw err;
    console.log('New update!');
});


//4

fs.readFile('new_file.txt', 'utf8', function (err, data){
    if (err) throw err;
    console.log(data);
});