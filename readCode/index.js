const fs = require("fs");
const textStr = fs.readFileSync("./a.txt", {
  encoding: "utf8",
});

function extractAllIntlInfo(text) {
  // 正则表达式，使用全局匹配模式（g）和 dotall 模式（s）
  const regex = /intl\s*\.get\('([^']+)'\)\s*\.d\(\s*'([\s\S]*?)'\s*\)/gs;

  // 使用 matchAll 获取所有匹配结果
  const matches = [...text.matchAll(regex)];

  // 将匹配结果转换为对象数组
  return matches.map((match) => ({
    key: match[1], // 提取键（如 hitf.services.model.services.interfaceCode.tip）
    defaultValue: match[2].trim(), // 提取默认值并去除多余空白
  }));
}

const searchWord = "同步API参数";
const replaceWord = "同步API参数";

const keyWordList = extractAllIntlInfo(textStr);
const result = keyWordList.filter(
  (i) => i.defaultValue.indexOf(searchWord) > -1
);

const outputStr = result
  .map((i) => {
    const str = i.defaultValue.replaceAll(searchWord, replaceWord);
    const [tem, code, ...codeList] = i.key.split(".");

    return `${tem + "." + code}\t${codeList.join(".")}\t${str}\t`;
  })
  .join("\n");

fs.writeFileSync("./output.txt", outputStr, {
  encoding: "utf8",
});
