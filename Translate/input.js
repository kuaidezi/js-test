const [TEMPLATE_CODE, TEXT_CODE] = ["hitf.relationMapping", "message"];

const CODE_LANG = "RELATION_MAPPING_LANG";

// 输入需要翻译的中文数组
const cnNames = ["系统名称", "映射名称", "系统编码", "客户端", "系统用户"];

const fieldList = [
  "systemName",
  "relationName",
  "systemCode",
  "clientName",
  "systemUser",
];

module.exports = {
  CN_NAMES: cnNames,
  FIELD_LIST: fieldList,
  TEMPLATE_CODE,
  TEXT_CODE,
  CODE_LANG,
};
