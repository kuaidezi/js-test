const { sortBy, camelCase } = require("lodash");
var users = [
  {
    fieldName: "EMPLOYEE_NAME",
    fieldType: "VARCHAR",
    fieldDesc: "员工名",
    requiredFlag: true,
  },
  {
    fieldName: "EMPLOYEE_NUMBER",
    fieldType: "VARCHAR",
    fieldDesc: "员工编号",
    requiredFlag: true,
  },
  {
    fieldName: "EMAIL",
    fieldType: "VARCHAR",
    fieldDesc: "邮箱",
    requiredFlag: false,
    required: false,
  },
  {
    fieldName: "ID",
    fieldType: "BIGINT",
    fieldDesc: "TODO用户测试 ID",
    requiredFlag: true,
  },
  {
    fieldName: "EMPLOYEE_NAME",
    fieldType: "VARCHAR",
    fieldDesc: "员工名",
    requiredFlag: true,
  },
  {
    fieldName: "EMPLOYEE_NUMBER",
    fieldType: "VARCHAR",
    fieldDesc: "员工编号",
    requiredFlag: true,
  },
  {
    fieldName: "OBJECT_VERSION_NUMBER",
    fieldType: "BIGINT",
    fieldDesc: "记录版本号",
    requiredFlag: true,
  },
];

const whoFields = [
  "objectVersionNumber",
  "createdBy",
  "creationDate",
  "lastUpdatedBy",
  "lastUpdateDate",
];

const list = sortBy(
  users,
  (o) => !o.requiredFlag,
  (o) => whoFields.includes(camelCase(o.fieldName))
);

let a = {
  connect_id: 5646,
  connect_code: "nmnhbgfg",
  connect_name: "5",
  config_json: "5",
  remark: "RULE20240102001003",
  tenant_id: 0,
  created_by: -1,
  last_updated_by: -1,
  creation_date: "2024-01-02 11:02:47",
  last_update_date: "2024-01-02 11:02:47",
  object_version_number: 1,
  connector_code: "#[global[CONNECTOR_CODE]]",
  connector_version: 0,
};
let b = {};
Object.keys(a).forEach((ele) => {
  b[camelCase(ele)] = a[ele];
});
console.log(b);
