// sync------------------------------------------------------------------------------------------------------

// const {readFileSync,writeFileSync} = require('fs');

// console.log(`start`);

// const first= readFileSync('./content/subfolder/text1.txt','utf-8');
// const second= readFileSync('./content/subfolder/text2.txt','utf-8');
// console.log(`the content is \n${first}\n${second}`);

// writeFileSync('./content/textMain.txt',`here is the result\n${first}\n${second}\n`,{flag:'a'});

// console.log(`done with the task`);
// console.log(`starting th next`);


// async------------------------------------------------------------------------------------------------------

const { readFile, writeFile } = require('fs');
// const { write } = require('node:fs');

console.log(`start`);

readFile('./content/subfolder/text1.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log('error in the first file reding:--',err.message);
        return;
    }
    const first = result;
    // console.log(first);
    readFile('./content/subfolder/text2.txt','utf-8',(err,result)=>{
        if(err){
            console.log("error in the second file reding:--",err.message);
            return;
        }
        const second = result;
        // console.log(second);
        writeFile(
            './content/textMain.txt',
            `The content added is:\n${first}\n${second}`,
            (err , result)=>{
            if(err){
                console.log(`The erroe in writting is :-- ${err.message}`);
                return;  
            }
            console.log(`The result has been written in textMain.txt`);
            
            
            
            
        })
        
    })

})
console.log(`starting the next task`);




