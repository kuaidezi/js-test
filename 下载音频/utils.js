const axios = require("axios");
const fs = require("fs");
const path = require("path"); // 引入文件路径模块
const cliProgress = require("cli-progress");
const { URL } = require("url");

// 创建进度条实例
const progressBar = new cliProgress.SingleBar(
  {},
  {
    // format: ' {bar} {percentage}% | ETA: {eta}s | {value}/{total}',
    format:
      "{bar} {percentage}% | {value}/{total} KB | {fileName} | \u2193 {speed} K ",
    barCompleteChar: "\u2588",
    barIncompleteChar: "\u2591",
  }
);

const downloaAudioFile = (url, fileName) => {
  // 监听 SIGINT 信号
  process.on("SIGINT", async () => {
    // 在用户按下 Ctrl+C 终止下载时执行的回调函数
    await deleteTempFiles();
    throw new Error({ msg: "下载已中止" });
  });

  const myURL = new URL(url);
  const defaultFilename =
    fileName || decodeURIComponent(path.basename(myURL.pathname));
  const filePath = path.resolve(__dirname, "dist", defaultFilename); // 定义文件路径

  return new Promise((resolve, reject) => {
    axios({
      url,
      method: "get",
      responseType: "stream",
      timeout: 10000,
    })
      .then(function (response) {
        // 获取文件总大小
        const totalLength = parseInt(response.headers["content-length"], 10);
        let downloaded = 0;

        const tempFileName = path.resolve(
          __dirname,
          "dist",
          defaultFilename + "." + Date.now() + ".temp"
        );
        // 创建可写流并将响应数据写入文件
        const writer = fs.createWriteStream(tempFileName);
        response.data.on("data", function (chunk) {
          downloaded += chunk.length;
          progressBar.update(downloaded, { speed: chunk.length / 1024 }); // 更新进度条
          writer.write(chunk);
        });

        response.data.on("end", function () {
          progressBar.stop();
          fs.rename(tempFileName, filePath, (err) => {
            if (err) {
              reject({ msg: "文件重命名失败", error: err });
            } else {
              resolve({
                msg: "File downloaded successfully",
                fileName: defaultFilename,
              });
            }
          });
        });

        // 初始化进度条并开始下载
        progressBar.start(totalLength, 0, {
          speed: 0,
          fileName: defaultFilename,
        });
      })
      .catch(function (error) {
        deleteTempFiles();
        reject({
          msg: "File downloaded Error",
          error,
        });
      });
  });
};

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

const deleteTempFiles = async () => {
  const list = await readFilesInDirectory(path.resolve(__dirname, "dist"));
  const pattern = /\.temp$/;
  list.forEach((ele) => {
    if (pattern.test(ele)) {
      fs.unlink(path.resolve(__dirname, "dist", ele), (err) => {
        if (err) {
          console.error("Error deleting the file:", err);
          return;
        }
      });
    }
  });
};

module.exports = { downloaAudioFile, readFilesInDirectory };
