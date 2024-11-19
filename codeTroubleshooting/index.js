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

const fileList = getAllFiles("./langs");

const sumList = [];

fileList.forEach((ele) => {
  const codeSnippet = fs.readFileSync(ele, "utf8");

  const regex = /intl\.get\(['"]([^'"]+)['"]\)/g;
  const matches = codeSnippet.match(regex);

  const findRepeatCode = () => {
    const repeatCodeList = [];

    const codes = matches.map((match) =>
      match.replace(/intl\.get\(['"]([^'"]+)['"]\)/, "$1")
    );

    const seen = {};
    for (let i = 0; i < codes.length; i++) {
      const item = codes[i];
      if (seen[item]) {
        repeatCodeList.push(item);
      } else {
        seen[item] = true;
      }
    }
    return repeatCodeList;
  };
  sumList.push(...findRepeatCode());
});
console.log(sumList);

fs.writeFileSync("./output.json", JSON.stringify(sumList, null, 4));
