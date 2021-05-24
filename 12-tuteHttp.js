//http module ----------------------------------
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write('Welcome to the home page');
        // res.end();
    }
    else if(req.url ==='/about'){
        res.write('welcome to about page');
    }
    else{
        res.write(
            '<h1>404 Error</h1><P>Page not found</p><a href="/">Go back to home</a>')
    }
    res.end();
    

    
})

server.listen(3000);