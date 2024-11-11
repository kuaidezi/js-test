const list = [
  {
    value: "AUTH",
    meaning: "接口认证",
    tag: "cyan",
    orderSeq: 10,
    enabledFlag: 1,
  },
  {
    value: "AUTHZ",
    meaning: "接口授权",
    tag: "green",
    orderSeq: 20,
    enabledFlag: 1,
  },
  {
    value: "SECUR",
    meaning: "安全策略",
    tag: "blue",
    orderSeq: 25,
    enabledFlag: 1,
  },
  {
    value: "FLOW",
    meaning: "流量控制",
    tag: "purple",
    orderSeq: 30,
    enabledFlag: 1,
  },
  {
    value: "HTTP",
    meaning: "请求配置",
    tag: "magenta",
    orderSeq: 40,
    enabledFlag: 1,
  },
  {
    value: "DATA",
    meaning: "数据处理",
    tag: "orange",
    orderSeq: 50,
    enabledFlag: 1,
  },
  {
    value: "OPS",
    meaning: "监控运维",
    tag: "yellow",
    orderSeq: 60,
    enabledFlag: 1,
  },
  {
    value: "FILE_PROTOCOL",
    meaning: "服务器连接",
    tag: "purple",
    orderSeq: 90,
    enabledFlag: 1,
  },
  {
    value: "RESOURCE",
    meaning: "三级分类",
  },
];

const fs = require("fs");
const path = require("path");

/**
 * 获取指定目录下的所有文件路径
 * @param {string} dir - 目录路径
 * @param {Array} files - 用于存储文件路径的数组（递归调用时传入）
 * @returns {Array} - 包含所有文件路径的数组
 */
function getAllFiles(dir, files = []) {
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      // 如果是目录，则递归调用
      getAllFiles(fullPath, files);
    } else {
      // 如果是文件，则添加到数组中
      files.push(fullPath);
    }
  });

  return files;
}

// 使用示例
const directoryPath = "./dist"; // 替换为你的目录路径
const allFiles = getAllFiles(directoryPath).map((i) =>
  i.replace("dist\\", "").replace(".svg", "")
);
console.log(allFiles);

allFiles.forEach((ele) => {
  const item = list.find((i) => i.meaning === ele || i.value === ele);
  if (item) {
    fs.renameSync(`./dist/${ele}.svg`, `./dist/${item.value}.svg`);
  }
});

// export { default as DEFAULT } from './DEFAULT.png';
let str = "";
allFiles.forEach((ele) => {
  str = str + `export { default as ${ele} } from './${ele}.svg';\n`;
});

fs.writeFileSync("./index.txt", str);
