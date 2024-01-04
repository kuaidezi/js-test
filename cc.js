const express = require("express");
const app = express();

// 设置静态文件目录
// app.use(express.static('public'));

// 创建路由
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/data", (req, res) => {
  const data = {
    _id: "1BXjOAdiKUXW",
    content:
      "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
    author: "Eckhart Tolle",
    tags: ["Famous Quotes"],
    authorSlug: "eckhart-tolle",
    length: 105,
    dateAdded: "2020-03-15",
    dateModified: "2023-04-14",
  };
  res.send(data);
});

// 启动服务器
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
