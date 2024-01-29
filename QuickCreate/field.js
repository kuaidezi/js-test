const list = ["a", "f", "b", "c"];
const createList = (arr) => {
  return arr.map((i) => ({ name: i }));
};
const data = JSON.stringify(createList(list), null, 4);
console.log(data);
