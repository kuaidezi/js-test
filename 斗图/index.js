const line = 110;
let str = "";
for (let i = 1; i <= line; i++) {
  if (!(i % 2)) {
    continue;
  }
  str +=
    Array(Math.floor((line - i) / 2))
      .fill(" ")
      .join("") +
    Array(i).fill("*").join("") +
    "\n";
}
console.time("start");
console.log(str);
console.timeEnd("start");
