const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

let list = [
  {
    value: "BASIC",
    meaning: "Basic认证",
    description: "基于用户名和密码的基础认证",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 10,
    enabledFlag: 1,
  },
  {
    value: "DIGEST",
    meaning: "摘要认证",
    description: "兼容Basic认证且更安全",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 20,
    enabledFlag: 1,
  },
  {
    value: "BEARER_TOKEN",
    meaning: "Bearer Token认证",
    description: "基于加密字符串进行令牌认证",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 30,
    enabledFlag: 1,
  },
  {
    value: "OAUTH1",
    meaning: "OAuth1认证",
    description: "OAuth 1.0使用的是基于签名的授权方式",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 40,
    enabledFlag: 1,
  },
  {
    value: "OAUTH2",
    meaning: "OAuth2认证",
    description:
      "产品支持标准OAuth2授权码认证，且对非标准OAuth2进行了兼容，只需要配置对应表单即可支持",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 50,
    enabledFlag: 1,
  },
  {
    value: "SOAP",
    meaning: "SOAP认证",
    description: "针对SOAP协议接口，采用用户密码及加密类型进行认证",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 60,
    enabledFlag: 1,
  },
  {
    value: "API_KEY",
    meaning: "键值认证",
    description: "匹配报文中指定位置的键值进行认证",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 70,
    enabledFlag: 1,
  },
  {
    value: "BAIDU",
    meaning: "百度认证",
    description: "百度开发平台提供的认证",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 110,
    enabledFlag: 1,
  },
  {
    value: "BEST_SIGN",
    meaning: "上上签认证",
    description: "上上签平台提供的认证",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 120,
    enabledFlag: 1,
  },
  {
    value: "GROOVY_SCRIPT_AUTH",
    meaning: "Groovy脚本认证",
    description: "线上编写Groovy脚本及配置对应参数表单完成自定义认证",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 130,
    enabledFlag: 1,
  },
  {
    value: "JAVA_SCRIPT_AUTH",
    meaning: "JS脚本认证",
    description: "线上编写JS脚本及配置对应参数表单完成自定义认证",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 140,
    enabledFlag: 1,
  },
  {
    value: "MOCK_IDENTITY",
    meaning: "模拟身份认证",
    description: "通过透传调用的身份映射模拟第三方系统身份的认证",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 160,
    enabledFlag: 1,
  },
  {
    value: "SAP",
    meaning: "SAP认证",
    description: "基于用户名和密码的认证",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTH",
    orderSeq: 170,
    enabledFlag: 1,
  },
  {
    value: "ROLE_INVOKE",
    meaning: "消费角色授权",
    description: "给系统角色分配接口调用权限",
    tag: '{"route": "/hitf/client-role","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTHZ",
    orderSeq: 180,
    enabledFlag: 1,
  },
  {
    value: "CLIENT_INVOKE",
    meaning: "消费客户端授权",
    description: "给客户端分配接口调用权限或接口消费授权角色",
    tag: '{"route": "/hitf/client-auth","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTHZ",
    orderSeq: 190,
    enabledFlag: 1,
  },
  {
    value: "ROLE_MANAGE",
    meaning: "操作权限管理",
    description: "给系统角色多维度分配权限去管理或运维接口",
    tag: '{"route": "/hitf/data-permission","siteMenu":true,"orgMenu":true}',
    parentValue: "AUTHZ",
    orderSeq: 200,
    enabledFlag: 1,
  },
  {
    value: "ACCESS_CONTROL",
    meaning: "访问控制",
    description: "基于请求信息、身份信息多个维度应用IP黑白名单限制访问",
    tag: '{"route": "/hadm/api-control","siteMenu":true,"orgMenu":false}',
    parentValue: "SECUR",
    orderSeq: 210,
    enabledFlag: 1,
  },
  {
    value: "CORS",
    meaning: "跨域访问",
    description: "应用跨域后可限制接口访问范围",
    tag: '{"route": null,"siteMenu":false,"orgMenu":false}',
    parentValue: "SECUR",
    orderSeq: 220,
    enabledFlag: 1,
  },
  {
    value: "ANTI_REPLAY",
    meaning: "防重复提交",
    description: "客户端启用防重放避免短时间内重复提交",
    tag: '{"route": "/hiam/client","siteMenu":true,"orgMenu":false}',
    parentValue: "SECUR",
    orderSeq: 230,
    enabledFlag: 1,
  },
  {
    value: "RATE_LIMIT",
    meaning: "限流配置",
    description: "采用固定速率、Redis令牌桶、信号量配置接口限流规则",
    tag: '{"route": "/hitf/rate-limit","siteMenu":true,"orgMenu":true}',
    parentValue: "FLOW",
    orderSeq: 240,
    enabledFlag: 1,
  },
  {
    value: "CIRCUIT_BREAKER",
    meaning: "熔断配置",
    description: "基于请求信息、身份信息多个维度应用熔断规则，也支持隔离配置",
    tag: '{"route": "/hadm/fuse-dimensions","siteMenu":true,"orgMenu":false}',
    parentValue: "FLOW",
    orderSeq: 250,
    enabledFlag: 1,
  },
  {
    value: "DYNAMIC_ROUTE",
    meaning: "动态路由",
    description: "网关原生提供负载均衡及多节点，基于节点组可按需求设定路由规则",
    tag: '{"route": "/hadm/node-rule","siteMenu":true,"orgMenu":false}',
    parentValue: "FLOW",
    orderSeq: 260,
    enabledFlag: 1,
  },
  {
    value: "GRAY_DEPLOY",
    meaning: "灰度发布",
    description:
      "通过节点组规则让一部分租户或用户先使用新版本功能或租户实现个性化功能",
    tag: '{"route": "/hadm/node-rule","siteMenu":true,"orgMenu":false}',
    parentValue: "FLOW",
    orderSeq: 270,
    enabledFlag: 1,
  },
  {
    value: "URL_MAPPING",
    meaning: "地址映射",
    description: "改写接口地址或特定维度使用个性化接口功能",
    tag: '{"route": "/hadm/url-mapping-config","siteMenu":true,"orgMenu":false}',
    parentValue: "FLOW",
    orderSeq: 280,
    enabledFlag: 1,
  },
  {
    value: "HTTP_PARAM",
    meaning: "请求参数配置",
    description: "配置HTTP连接参数和自定义请求头",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "HTTP",
    orderSeq: 290,
    enabledFlag: 1,
  },
  {
    value: "HTTP_PROXY",
    meaning: "服务代理",
    description: "调用透传接口时支持使用代理",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "HTTP",
    orderSeq: 300,
    enabledFlag: 1,
  },
  {
    value: "FIELD_MAPPING",
    meaning: "字段映射",
    description:
      "配置化加工请求或响应报文结构，可实现报文层级提升、下沉，字段增、删、改等",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "DATA",
    orderSeq: 310,
    enabledFlag: 1,
  },
  {
    value: "VALUE_MAPPING",
    meaning: "数据映射",
    description:
      "配置转换请求或响应报文数据，支持公式拼接、独立值集、值映射、SQL转换等",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "DATA",
    orderSeq: 320,
    enabledFlag: 1,
  },
  {
    value: "SCRIPT_MAP",
    meaning: "映射类",
    description: "编程式处理请求或响应报文，实现界面配置无法处理的个性化操作",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "DATA",
    orderSeq: 330,
    enabledFlag: 1,
  },
  {
    value: "DESENSITIZE",
    meaning: "数据脱敏",
    description: "应用脱敏规则，屏蔽处理报文或日志中敏感隐私数据",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "DATA",
    orderSeq: 340,
    enabledFlag: 1,
  },
  {
    value: "TZ_TRANSFER",
    meaning: "时区转换",
    description: "针对消费方和提供方时区差异，进行日期字段转换",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "DATA",
    orderSeq: 350,
    enabledFlag: 1,
  },
  {
    value: "ENCRYPT",
    meaning: "报文加解密",
    description: "在请求方-平台、平台-提供方方向针对报文或日志加解密",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "DATA",
    orderSeq: 360,
    enabledFlag: 1,
  },
  {
    value: "RESULT_CACHE",
    meaning: "请求结果缓存",
    description: "缓存请求结果降低请求频次可用来降低系统负载或付费接口成本",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "DATA",
    orderSeq: 370,
    enabledFlag: 1,
  },
  {
    value: "ERROR_MAPPING",
    meaning: "请求异常映射",
    description: "透传异常可以对响应报文结构加工返回期望格式",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "DATA",
    orderSeq: 380,
    enabledFlag: 1,
  },
  {
    value: "LOG_COLLECT",
    meaning: "日志收集策略",
    description: "按需选择接口日志收集范围",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "OPS",
    orderSeq: 390,
    enabledFlag: 1,
  },
  {
    value: "FIELD_EXTRACT",
    meaning: "业务字段提取",
    description: "提取报文中的业务关键信息展示在接口监控",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "OPS",
    orderSeq: 400,
    enabledFlag: 1,
  },
  {
    value: "BIZ_ASSERT",
    meaning: "业务状态断言",
    description: "基于报文设置断言判断业务状态是否成功及失败预警",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "OPS",
    orderSeq: 410,
    enabledFlag: 1,
  },
  {
    value: "HEALTH_CHECK",
    meaning: "健康检查告警",
    description: "周期性调用接口进行健康检查并设置阈值触发告警通知",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "OPS",
    orderSeq: 420,
    enabledFlag: 1,
  },
  {
    value: "FAULT_EXTRACT",
    meaning: "故障匹配策略",
    description: "匹配故障知识库，快捷获取故障解决方案",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "OPS",
    orderSeq: 430,
    enabledFlag: 1,
  },
  {
    value: "NACOS",
    meaning: "Nacos连接",
    description: "外部Nacos注册中心配置，配置后将由外部注册中心解析服务名称",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "HTTP",
    orderSeq: 440,
    enabledFlag: 1,
  },
  {
    value: "ETCD",
    meaning: "Etcd连接",
    description: "外部Etcd注册中心，配置后将由外部Etcd解析服务名称",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "HTTP",
    orderSeq: 450,
    enabledFlag: 1,
  },
  {
    value: "FTP",
    meaning: "FTP连接",
    description:
      "配置与FTP服务器的连接，支持通过用户名、密码及其他认证信息与FTP服务器进行文件传输，确保数据传输的可靠性和安全性。通过该连接，可实现文件的读取等操作。",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "FILE_PROTOCOL",
    orderSeq: 470,
    enabledFlag: 1,
  },
  {
    value: "SFTP",
    meaning: "SFTP连接",
    description:
      "配置与SFTP服务器的连接，支持通过用户名、密码及密钥认证与SFTP服务器进行安全的文件传输，确保数据的加密性和完整性。可实现文件的读取等操作。",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "FILE_PROTOCOL",
    orderSeq: 480,
    enabledFlag: 1,
  },
  {
    value: "SAP_CONNECTION",
    meaning: "SAP连接",
    description:
      "配置与SAP系统的连接，支持通过用户名、密码及其他认证信息与SAP系统进行安全通信，确保数据传输的可靠性和安全性。通过该连接，可实现RFC（远程函数调用）等操作，支持与SAP系统进行高效的数据交互和业务集成。",
    tag: '{"route": "/hitf/service-guide","siteMenu":true,"orgMenu":true}',
    parentValue: "SAP_SERVICE",
    orderSeq: 500,
    enabledFlag: 1,
  },
];

function readDirectoryRecursive(dir) {
  const results = [];

  function read(dir) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        read(filePath); // 递归读取子目录
      } else {
        results.push(filePath); // 添加文件路径到结果
      }
    });
  }

  read(dir);
  return results;
}

const directoryPath = "./input/"; // 替换为你的目录路径
const allFiles = readDirectoryRecursive(directoryPath).map((i) =>
  i.replace("input\\", "").replace(".svg", "")
);
allFiles.forEach((ele) => {
  const flag = list.find(
    (i) => i.meaning.indexOf(ele) > -1 || [i.value, i.meaning].includes(ele)
  );
  if (flag) {
    fs.renameSync(`./input/${ele}.svg`, `./input/${flag.value}.svg`);
  }
});
console.log(allFiles);
// ;
