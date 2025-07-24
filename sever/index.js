// 导入 Express 模块
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
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
app.get("/list", (req, res) => {
  // 同步读取文件内容
  try {
    const data = fs.readFileSync("./data.json", "utf8");
    res.send(data);
  } catch (err) {
    console.error("读取文件时发生错误:", err);
  }
});

app.post("/list", (req, res) => {
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

// 存储 SSE 客户端（key: sessionId, value: Response 对象）
const sseClients = new Map();

// SSE 连接（GET /events）
app.get("/events", (req, res) => {
  const sessionId = uuid(); // 生成唯一 sessionId
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let counter = 0;
  // 首次连接时发送 sessionId
  res.write(`id: ${counter}\n`);
  res.write(`data: ${JSON.stringify({ type: "SESSION_ID", sessionId })}\n\n`);

  // 模拟定时推送数据
  const intervalId = setInterval(() => {
    counter++;

    const resData = {
      sessionId,
      type: "SESSION_ID",
      time: new Date().toLocaleTimeString(),
    };
    res.write(`id: ${counter}\n`);
    res.write(`data: ${JSON.stringify(resData)}\n\n`);

    // 如果客户端断开连接，清除定时器
    if (req.socket.destroyed) {
      clearInterval(intervalId);
      console.log("Client disconnected");
    }
  }, 3000);

  // 存储客户端响应对象
  sseClients.set(sessionId, res);

  // 客户端断开时移除
  req.on("close", () => {
    sseClients.delete(sessionId);
  });
});

// POST /events 动态控制指定 SSE 连接
app.post("/events", (req, res) => {
  const { sessionId, message } = req.body;

  if (!sessionId || !sseClients.has(sessionId)) {
    return res.status(400).send("Invalid sessionId");
  }

  // 向指定 SSE 客户端推送数据
  const clientRes = sseClients.get(sessionId);
  clientRes.write(`data: ${JSON.stringify({ type: "MESSAGE", message })}\n\n`);

  res.sendStatus(200);
});

app.use(express.static(path.join(__dirname)));

// 监听端口，启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
