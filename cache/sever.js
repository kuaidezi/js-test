const express = require("express");
const mockjs = require("mockjs");

const app = express();
const port = 3000;

// 允许跨域请求
app.use((req, res, next) => {
  // 设置允许跨域的来源
  res.header("Access-Control-Allow-Origin", "*");
  // 设置允许的请求方法
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  // 设置允许的请求头字段
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  // 允许发送跨域凭证（例如 Cookie）
  res.header("Access-Control-Allow-Credentials", true);
  // 如果是预检请求（OPTIONS），直接返回200
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    // 添加缓存控制头
    res.header("Cache-Control", "max-age=900"); // 15分钟的缓存
    next();
  }
});

// 处理GET请求
app.get("/", (req, res) => {
  const { data } = mockjs.mock({
    "data|1-10": [
      {
        zh_name: "@cname",
        en_name: "@name",
      },
    ],
  });
  res.send(data);
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
