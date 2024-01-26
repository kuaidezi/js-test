const { isEmpty } = require("lodash");

// const obj = {
//   "aaa.[0]": 12,
//   "aaa.[1]": 12,
//   "aaa.[2]": 12,
//   "aaa.[3]": 12,
//   _dirtry: true,
// };
// console.log(obj, omit(obj, ["_dirtry"]));
isNil = isEmpty;
var result = isNil(null); // true
var result2 = isNil(undefined); // true
var result3 = isNil(0); // false
var result4 = isNil(""); // true
console.log({ result, result2, result3, result4 });
