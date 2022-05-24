const isIllegel = (str) =>
  str.toLowerCase() === "xxx" ||
  str.toLowerCase() === "porn" ||
  str.toLowerCase() === "sex";

let a = "Sex";
let b = "poRn";
let c = "xxX";

console.log(isIllegel(a));
console.log(isIllegel(b));
console.log(isIllegel(c));
