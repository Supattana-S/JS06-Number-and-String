const extractCurrencyValue = (usd, rate) => "THB" + +usd.slice(1) * rate;

let a = "$120";
let b = "$2500";
let c = "$40";

console.log(extractCurrencyValue(a, 30));
console.log(extractCurrencyValue(b, 30));
console.log(extractCurrencyValue(c, 30));
