//optional chaining
const A = {
  name: {
    fName: {
      lName: "john",
    },
  },
  age: 30,
  showMessage() {
    let a = 5;
    let b = 6;
    console.log("hey there");
    return a + b;
  },
};
console.log(A.name.fName.lName?.surName ?? "no surname");
console.log(A.name ? (A.name.fName ? A.name.fName.lName : null) : null);
console.log(A.showMessage());

console.log(A.openMessage?.() ?? "no such function");
