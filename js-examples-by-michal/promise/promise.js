// const x = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("1000"), 1000);
//   //   reject(new Error("hmm"));
// });
// console.log(x);

// x.then(res => console.log(res)).catch(err => console.log(err));
// console.log("now");

const myFunction = async (a, b, c) => {
  const x = await new Promise((resolve, reject) => {
    setTimeout(() => resolve("1000"), 1000);
    //   reject(new Error("hmm"));
  });

  console.log(x);
};
myFunction();
