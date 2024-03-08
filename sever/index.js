// 导入 Express 模块
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const { uuid } = require("uuidv4");

// 创建 Express 应用
const app = express();
const port = 3000;

// 使用 body-parser 中间件将请求体解析为 JSON 格式
app.use(bodyParser.json());

// 设置允许所有跨域请求
app.use(
  cors({
    origin: "*",
  })
);

// 定义根路由的处理程序
app.get("/", (req, res) => {
  // 同步读取文件内容
  try {
    const data = fs.readFileSync("./data.json", "utf8");
    res.send(data);
  } catch (err) {
    console.error("读取文件时发生错误:", err);
  }
});

app.post("/", (req, res) => {
  // 同步读取文件内容
  try {
    const data = { ...req.body, id: uuid() };
    const oldDataList = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    if (oldDataList.find((i) => i.code === data.code)) {
      res.status(200).send({ failed: true, message: "code repeat!" });
      return;
    }
    if (!data.code) {
      res.status(200).send({ failed: true, message: "code is null" });
      return;
    }

    oldDataList.push(data);

    fs.writeFileSync("./data.json", JSON.stringify(oldDataList, null, 4), {
      encoding: "utf8",
    });

    res.send(data);
  } catch (err) {
    console.error("读取文件时发生错误:", err);
  }
});

app.get("/detail/:id", (req, res) => {
  const { id } = req.params;

  // 同步读取文件内容
  try {
    const data = fs.readFileSync("./data.json", "utf8");
    // 例如筛选特定 id 的数据等
    const jsonData = JSON.parse(data);
    const specificData = jsonData.find((item) => item.id === id) || {};

    res.send(specificData);
  } catch (err) {
    console.error("读取文件时发生错误:", err);
  }
});

app.put("/detail/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  // 同步读取文件内容
  try {
    const data = fs.readFileSync("./data.json", "utf8");
    // 例如筛选特定 id 的数据等
    const jsonData = JSON.parse(data);
    const specificData = jsonData.find((item) => item.id === id);
    if (specificData) {
      const newData = jsonData.map((item) => {
        if (item.id === id) {
          return { ...specificData, ...body };
        }
        return item;
      });

      fs.writeFileSync("./data.json", JSON.stringify(newData, null, 4), {
        encoding: "utf8",
      });

      res.send({ ...specificData, ...body });
    } else {
      res.status(200).send({ failed: true, message: "code is null" });
    }
  } catch (err) {
    console.error("读取文件时发生错误:", err);
  }
});

app.all("*", (req, res) => {
  res.send({ msg: 404, params: req.params, body: req.body });
});

// 监听端口，启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
