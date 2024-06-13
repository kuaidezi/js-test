const fs = require("fs");
const csv = require("csv-parser");

function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

// 使用示例
readCSV("employeeList.csv")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
