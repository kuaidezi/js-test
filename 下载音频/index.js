const fs = require("fs");
const { downloaAudioFile, readFilesInDirectory } = require("./utils");

const dataJson = fs.readFileSync("./video.json", {
  encoding: "utf8",
});

const dataList = JSON.parse(dataJson);

const run = async () => {
  if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
  }
  const fileList = await readFilesInDirectory("./dist");

  const filterList = dataList.filter((i) => !fileList.includes(i.catalogName));

  const promises = filterList.map(
    (i) => async () => downloaAudioFile(i.fileUrl, i.catalogName)
  );

  executePromisesSequentially(promises)
    .then(() => {
      console.log("所有 Promise 都执行完成");
    })
    .catch((error) => {
      console.error("出现错误：", error);
    });
};

function executePromisesSequentially(promiseFuncs) {
  if (promiseFuncs.length === 0) {
    // 所有 Promise 都已执行完成
    return Promise.resolve();
  }

  const promiseFunc = promiseFuncs.shift();
  return promiseFunc().then(() => {
    return executePromisesSequentially(promiseFuncs);
  });
}

run();
