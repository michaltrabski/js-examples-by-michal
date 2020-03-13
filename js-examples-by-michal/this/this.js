// console.log(this);
function aa() {}
this.aaa = "aaa";
let aaaa = { aaaa: "aaaa" };

let obj = {
  name: "jan",
  hello: function() {
    console.log(this);
    // say1();
    function say1() {
      console.log(this);
    }
  }
};
console.log(this.aaa);
console.log(this);
// obj.hello();

// let obj2 = {
//   name: "jan",
//   hello: () => {
//     console.log("obj2", this);
//   }
// };
// obj2.hello();
