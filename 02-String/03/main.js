const ucifirst = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
};

let a = "tangpond";

console.log(ucifirst(a));
