// Normal Call

// const namePromise = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//     resolve("Data receive successfully");
//   },3000);

//   setTimeout(()=>{
//     reject("no data back from the server")
//   },2000)
// });

// namePromise.then(response => {
//   log(response);
// }).catch(error => {
//   log(error);
// });


// Promise All

export const promiseName = new Promise( (resolve,reject) => {
  setTimeout( ()=> {
    resolve(['Anna', 'Jones', 'Ali', 'Jake']);
  }, 3000);
  setTimeout(()=>{
    reject('No data recive from the server');
  },5000)
});

export const promiseSurName = new Promise( (resolve,reject) => {
  setTimeout( ()=> {
    resolve(['Williams', 'Bravo', 'Mohammado', 'Smith']);
  }, 3000);
  setTimeout(()=>{
    reject('No data recive from the server');
  },5000)
})

