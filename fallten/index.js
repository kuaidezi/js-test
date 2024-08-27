const { readFileSync, writeFileSync } = require("fs");
const { uuid } = require("uuidv4");
const { omit } = require("lodash");

const run = () => {
  const data = JSON.parse(
    readFileSync("./data.json", {
      encoding: "utf8",
    })
  );

  const list = [];

  const recursion = (arr, parentKeyId) => {
    arr.forEach((ele) => {
      const id = uuid();
      const obj = omit({ ...ele, keyId: id }, ["dataSourceList"]);
      if (parentKeyId) {
        obj.parentKeyId = parentKeyId;
      }
      list.push(obj);
      if (ele.dataSourceList) {
        recursion(ele.dataSourceList, id);
      }
    });
  };
  recursion(data);

  console.log(list);

  writeFileSync("./output.json", JSON.stringify(list, null, 4), {
    encoding: "utf8",
  });
};

run();
