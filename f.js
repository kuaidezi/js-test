const arr = [234, 23, 48, 309, 345, 343, 24, 13, 62, 45, 347, 755, 85, 54];
const fn = (k) => {
  return arr.sort((a, b) => a - b)[k];
};
console.log(fn(4));
