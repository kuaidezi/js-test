// 使用 Mock
var Mock = require("mockjs");
const { camelCase } = require("lodash");

const fs = require("fs");

var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|100": [
    {
      employeeName: "@cname",
      "sex|0-1": 0,
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "employeeId|+1": 100,
      "age|18-60": 18,
      employeeCode: "@name(true)",
      "affiliatedBank|1": [
        "=KKm3Aa0TP8uY4QMsctFnxME2birDU6VpU4cMy4FXgtk==",
        "=vIxkaM0AeO_xsA6i11t26s-LdOhWaVEB6dUpkvUlQSY==",
        "=Dbbodd-kFQgTtxnJrY1q-YBiD8kJFFuto6EsDuUC5c8==",
        "=Dbbodd-kFQgTtxnJrY1q-RajBVih_2YyH2jvgcSjF-4==",
      ],
      lastUpdatedBy: "=aYsD-emcDNeTPCK4-bc5XbYg_MTGpywRlQAh75-xS9k==",
      createdBy: "=aYsD-emcDNeTPCK4-bc5XbYg_MTGpywRlQAh75-xS9k==",
    },
  ],
});

const list = data.list.map((i) => ({
  ...i,
  employeeCode: camelCase(i.employeeCode),
}));

// 输出结果
fs.writeFileSync("./data.json", JSON.stringify(list, null, 4), {
  encoding: "utf8",
});
