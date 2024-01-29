const fetch = require("isomorphic-fetch");
const fs = require("fs");
const path = require("path"); // 引入文件路径模块

const url =
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F8ab3dcee-aba9-407f-bdc8-d8b590619605%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1709120167&t=37cba35e83f7ba73e1e7a1ba730ed4ee";
const filePath = path.resolve(__dirname, "downloadedImage.webp"); // 定义文件路径

fetch(url)
  .then((res) => res.arrayBuffer())
  // .then((blob) => {
  //   return blob.arrayBuffer();
  // })
  .then((data) => Buffer.from(data))
  .then((data) => {
    // 现在你可以使用 data 变量了，它是字符串或 ArrayBuffer 类型，取决于你读取的是文本文件还是二进制文件
    // 在这里你可以将 data 写入文件，例如：
    console.log(data);
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error("写入文件时发生错误:", err);
      } else {
        console.log("数据已写入文件:", filePath);
      }
    });
  })
  .catch((err) => console.error("发生错误:", err));
