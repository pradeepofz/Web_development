setTimeout(()=>{
    console.log(`1 sec passed`);
    setTimeout(()=>{
        console.log(`2 sec passed`);
        setTimeout(()=>{
            console.log(`3 sec passed`);
            setTimeout(()=>{
                console.log(`4 sec passed`);
                
            },1000)
        },1000)
    },1000)
 },1000)
 
 const wait = function(s){
    return new Promise ((resolve)=>{
        setTimeout(resolve,1000);
    })
 }
 
 wait(1)
 .then(()=>{console.log(`1 sec passed`) 
 return wait(1)
 })
 .then(()=>{console.log(`2 sec passed`) 
 return wait(1)
 })
 .then(()=>{console.log(`3 sec passed`) 
 return wait(1)
 })
 .then(()=>{console.log(`4 sec passed`) 
 return wait(1)
 })