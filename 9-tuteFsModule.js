const {readFileSync,writeFileSync} = require('fs');




const first= readFileSync('./content/subfolder/text1.txt','utf-8');
const second= readFileSync('./content/subfolder/text2.txt','utf-8');

// console.log(`the content is \n${first}\n${second}`);

writeFileSync('./content/textMain.txt',`here is the result\n${first}\n${second}\n`,{flag:'a'});




