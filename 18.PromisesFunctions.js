const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
                // resolve("P1 resolved")
                reject("P1 rejected")
        },4000)
})

const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
                resolve("P2 resolved")
        },2000)
})

const p3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
                // resolve("P3 resolved")
                reject("P3 rejected")
        },1000)
})

Promise.allSettled([p1,p2,p3])
.then((res)=>{
        console.log(res);
})
.catch(err=>{
        console.log(err);
})