const fs = require("fs");
const { toUpper, camelCase, keys, set } = require("lodash");

const { fetchTranslateWord } = require("./http");

const { CN_NAMES, TEMPLATE_CODE, TEXT_CODE } = require("./input");

const ApplyingTemplate = (key, meaning) => {
  const code = `${TEMPLATE_CODE}.${TEXT_CODE}.${key}`;
  return `() => intl.get("${
    code.length > 60 ? "???Too long Warning!!!!" + code : code
  }").d("${meaning}")`;
};

const cnNames = CN_NAMES;

const convertToObject = async () => {
  const translateWords = cnNames.join("#");
  const enStr = await fetchTranslateWord(translateWords);
  const enNames = enStr.split("#").map((i) => i.trim());

  const mappingObject = mergeLanguageNames(enNames, cnNames);

  const output = {};
  //   输出对象
  keys(mappingObject).forEach((element) => {
    const templateStr = ApplyingTemplate(
      camelCase(element),
      mappingObject[element]
    );

    set(output, element, templateStr);
  });

  let writeStr = "";

  enNames.forEach((ele) => {
    const key = toUpper(ele.replace(/ /g, "_"));
    writeStr += `\t${key}: ${output[ele]},\n`;
  });

  const fileStr = `import intl from "utils/intl"\n;
  const Langs =  {\n ${writeStr}\n};
  export default Langs;`;

  fs.writeFileSync("./output.js", fileStr, {
    encoding: "utf8",
  });

  console.log(writeStr);
};

function mergeLanguageNames(enNames, cnNames) {
  if (enNames.length !== cnNames.length) {
    return null; // 英文和中文水果名称数量不一致，返回null
  }
  const mergedFruitNames = {};
  for (let i = 0; i < enNames.length; i++) {
    mergedFruitNames[enNames[i]] = cnNames[i];
  }
  return mergedFruitNames;
}

convertToObject();
