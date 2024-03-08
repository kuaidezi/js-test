const XLSX = require("xlsx");

// 读取 Excel 文件
const workbook = XLSX.readFile("./data.xlsx");

// 获取第一个工作表的名称
const sheetName = workbook.SheetNames[0];

// 根据工作表名称获取工作表数据
const worksheet = workbook.Sheets[sheetName];

// 将工作表数据转换为 JSON 格式
const jsonData = XLSX.utils.sheet_to_json(worksheet);
// 将 JSON 数据转换回数组格式
const dataArray = jsonData.map((obj) => Object.values(obj));
// // 打印读取的数据
console.log(dataArray);

// 示例 JSON 数据
// const jsonData = [
//   { Name: "Alice", Age: 30, City: "New York" },
//   { Name: "Bob", Age: 25, City: "San Francisco" },
//   { Name: "Charlie", Age: 35, City: "Chicago" },
// ];

// // 一个包含数组数据的数组
// const data = [
//   ["Name", "Age", "City"],
//   ["Alice", 30, "New York"],
//   ["Bob", 25, "San Francisco"],
//   ["Charlie", 35, "Chicago"],
//   ["66666", 35, "6666666"],
// ];

// // 创建一个 Workbook
// const wb = XLSX.utils.book_new();
// // 将数据转换为 Worksheet
// const ws = XLSX.utils.json_to_sheet(jsonData);
// // 将数组数据转换为 Worksheet
// const ws2 = XLSX.utils.aoa_to_sheet(data);

// // 将 Worksheet 添加到 Workbook 中
// XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
// XLSX.utils.book_append_sheet(wb, ws2, "Sheet2");

// // 将 Workbook 写入 Excel 文件
// const excelFilePath = "./data.xlsx";
// XLSX.writeFile(wb, excelFilePath);
