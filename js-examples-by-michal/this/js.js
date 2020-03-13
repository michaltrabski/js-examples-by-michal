// "use strict";
const obj = {
  name: "test",
  say: function() {
    console.log("1 this = ", this);
    (function innerF1() {
      console.log("2 innerF1 this = ", this);
    })();
    (function innerF2() {
      console.log("3 innerF2 this in use strict is undefined = ", this);
    })();
  },
  arrow: () => {
    console.log("4 arrow this = ", this);
  }
};
if (1 === 2) {
  const obj2 = obj;
  const obj3 = { ...obj };
  console.log("obj", obj);
  console.log("obj2", obj2);
  console.log("obj3", obj3);

  delete obj2.arrow;
  console.log("obj", obj);
  console.log("obj2", obj2);
  console.log("obj3", obj3);
}

obj.say();
obj.arrow();

function x() {
  console.log("5 this in function is window object, this =", this);
  console.log("6 this in strict mode is undefined, this =", this);
}
x();
