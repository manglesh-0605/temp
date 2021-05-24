const path = require('path');

console.log(path.sep);

const filepath = path.join('./content','/subfolder','/text1.txt');
const base = path.basename(filepath);
const absPath = path.resolve(__dirname,'content','subfolder','text1.txt');


console.log(filepath);
console.log(base);
console.log(absPath);



