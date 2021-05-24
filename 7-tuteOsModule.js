//modules ----

//we are covering --------------
// os
// fs
// path
//http



// os--------------------------------------
const os = require('os');

// console.log(os.userInfo());
// console.log(os.uptime());
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    upTime:os.uptime()

}

const userinfo = {
    userInfo:os.userInfo(),
    userName:os.userName
}


console.log(currentOs);
console.log(userinfo);




