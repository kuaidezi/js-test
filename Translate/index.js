const fs = require("fs");
const { toUpper, camelCase, keys, set } = require("lodash");

const { fetchTranslateWord } = require("./http");

const {
  CN_NAMES,
  TEMPLATE_CODE,
  TEXT_CODE,
  FIELD_LIST,
  CODE_LANG,
} = require("./input");

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

  const fieldKeys = [];

  enNames.forEach((ele) => {
    const key = toUpper(ele.replace(/ /g, "_"));
    const checkKey = isContainsSpecialCharacters(key) ? `"${key}"` : key;
    writeStr += `\t${checkKey}: ${output[ele]},\n`;
    fieldKeys.push(checkKey);
  });

  const fileStr = `import intl from "utils/intl";\n\n
const Langs =  {\n ${writeStr}\n};\n\n
export default Langs;`;

  fs.writeFileSync("./output.js", fileStr, {
    encoding: "utf8",
  });

  // 写field
  const createList = (arr) => {
    return arr.map((n, i) => ({
      name: n,
      type: `&&&&&FieldType.string&&&&&`,
      label: `&&&&&${CODE_LANG}.${fieldKeys[i]}()&&&&&`,
    }));
  };
  const str = JSON.stringify(createList(FIELD_LIST), null, 4);
  const writeFieldStr = "const list =" + str.replace(/"&&&&&|&&&&&"/g, "");

  fs.writeFileSync("./fields.js", writeFieldStr, {
    encoding: "utf8",
  });
  console.log();

  // console.log(output, fieldKeys);
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

function isContainsSpecialCharacters(str) {
  const regex = /[,"'!！:;[\]{}()=+\-\/\\]/;
  return regex.test(str);
}

convertToObject();
