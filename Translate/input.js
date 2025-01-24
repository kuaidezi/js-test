const [TEMPLATE_CODE, TEXT_CODE] = ["hitf.resourceCenter", "message"];

const CODE_LANG = "RESOURCE_CENTER_LANG";

// 输入需要翻译的中文数组
const cnNames = [
  "连接类型",
  "RFC目标",
  "SAP实例编号",
  "SAP集团号",
  "用户名",
  "密码",
  "默认语言",
  "SAP路由",
  "最大连接数",
  "空闲连接最大数量",
  "获取连接超时时间（毫秒）",
  "连接池连接过期时间（毫秒）",
  "连接检查间隔（毫秒）",
  "SAP服务器IP地址",
  "消息服务器IP或域名",
  "消息服务端口",
  "系统ID",
  "客户端组",
];

const fieldList = [
  "connectionType",
  "destinationName",
  "jcoSysnr",
  "jcoClient",
  "jcoUser",
  "jcoPasswd",
  "jcoLang",
  "jcoSaprouter",
  "jcoDestinationPeakLimit",
  "jcoPoolCapacity",
  "jcoMaxGetClientTime",
  "jcoExpirationTime",
  "jcoExpirationCheckPeriod",
  "jcoAshost",
  "jcoMshost",
  "jcoMsserv",
  "jcoR3name",
  "jcoGroup",
];

module.exports = {
  CN_NAMES: cnNames,
  FIELD_LIST: fieldList,
  TEMPLATE_CODE,
  TEXT_CODE,
  CODE_LANG,
};
