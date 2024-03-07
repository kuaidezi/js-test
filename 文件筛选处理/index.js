const fs = require("fs");
const path = require("path"); // 引入文件路径模块

const excelStr = fs.readFileSync("./excelCopy.txt", {
  encoding: "utf8",
});
const data = excelStr.split("\n").map((i) => {
  const [编号, 类型, 功能大类, 功能小类, 功能名称, 分级, 需要补录] = i
    .replace(/\r/g, "")
    .split("\t");
  return { 编号, 类型, 功能大类, 功能小类, 功能名称, 分级, 需要补录 };
});

if (!fs.existsSync("output")) {
  fs.mkdirSync("output");
}

const readFilesInDirectory = (directoryPath) => {
  return new Promise((resolve, reject) => {
    let fileList = [];

    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject({ msg: "Error reading directory:", error: err });
        return;
      }

      const promises = files.map((file) => {
        return new Promise((resolveFile, rejectFile) => {
          const filePath = path.join(directoryPath, file);
          fs.stat(filePath, (error, stats) => {
            if (error) {
              rejectFile({ msg: "Error stating file:", error: error });
              return;
            }
            if (stats.isFile()) {
              fileList.push(file);
              resolveFile();
            } else if (stats.isDirectory()) {
              readFilesInDirectory(filePath)
                .then((nestedFiles) => {
                  fileList = fileList.concat(nestedFiles);
                  resolveFile();
                })
                .catch(rejectFile);
            }
          });
        });
      });

      Promise.all(promises)
        .then(() => {
          resolve(fileList);
        })
        .catch(reject);
    });
  });
};

function executePromisesSequentially(promiseFuncs) {
  if (promiseFuncs.length === 0) {
    // 所有 Promise 都已执行完成
    return Promise.resolve({ msg: "全部完成！" });
  }

  const promiseFunc = promiseFuncs.shift();
  return promiseFunc().then(() => {
    return executePromisesSequentially(promiseFuncs);
  });
}

function copyFile(source, target) {
  return new Promise((resolve, reject) => {
    fs.copyFile(source, target, (err) => {
      if (err) {
        reject({ msg: "Error copying file", flag: false });
      } else {
        console.log("File copied successfully!");
        resolve({ msg: "File copied successfully!", flag: true });
      }
    });
  });
}

const run = async () => {
  const files = await readFilesInDirectory(path.resolve(__dirname, "dist"));
  const promiseList = [];
  data.forEach((i) => {
    const file = files.find((n) => n.startsWith(i.编号));
    if (file) {
      const source = path.resolve(__dirname, "dist", file);
      const target = path.resolve(__dirname, "output", file);
      promiseList.push(async () => await copyFile(source, target));
    }
  });

  executePromisesSequentially(promiseList)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

run();
