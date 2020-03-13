// User example start
class User {
  constructor(name) {
    this.name = name;
    this.counter = 0;
  }
  logIn() {
    console.log(`${this.name} is logged in!`);
  }
  logOut() {
    console.log(`${this.name} is logged out!`);
  }
  updateCounter() {
    this.counter++;
    console.log(`counter = ${this.counter}.`);
    return this; // if I return this then I can chain methods
  }
}
class Admin extends User {
  removeUser(user) {
    console.log(`${user} is removed!`);
  }
}
const user1 = new User("user1");
user1.logIn();
user1.logOut();

const admin1 = new Admin("admin1");
admin1.removeUser("janusz");
admin1.updateCounter().updateCounter();

// User example end

// Person example start
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    console.log("this = ", this);
  }
  static staticMethodHello(param) {
    console.log(
      "static methods can be called on Class not on object created by class"
    );
    console.log("this in static =", this);
    console.log("param =", param);
    console.log("param.name =", param.name);
  }
  myNameIs() {
    console.log(`My name is ${this.name} ${this.surname}`);
  }
  arrow = () => {
    console.log(`My arrow name is ${this.name} ${this.surname}`);
  };
  myAge(age = 100) {
    console.log(`My age is ${age} (${this.name} ${this.surname})`);
  }
}

// const p1 = new Person("Jan", "Kowalski");
// console.log("p1", p1);

// const p2 = new Person("Piotr", "Nowak");
// console.log("p2", p2);

// p1.myNameIs();
// p1.myAge();
// p1.myAge(35);
// p1.arrow();

// Person.staticMethodHello(p1);
// Person example end
