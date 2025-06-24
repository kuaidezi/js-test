const fs = require("fs");
const path = require("path");
const https = require("https");
const axios = require("axios");

// 读取JSON数据
const services = require("./services.json"); // 假设JSON数据保存在services.json文件中

// 创建downloads目录（如果不存在）
const downloadDir = "./downloads";
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir);
}

// 下载函数
async function downloadImage(url, filename) {
  try {
    // 获取文件扩展名
    const ext = path.extname(url.split("?")[0]) || ".jpg";
    const safeFilename =
      filename.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, "_") + ext;
    const filePath = path.join(downloadDir, safeFilename);

    const response = await axios({
      method: "get",
      url: url,
      responseType: "stream",
    });

    const writer = fs.createWriteStream(filePath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", () => {
        console.log(`下载成功: ${safeFilename}`);
        resolve();
      });
      writer.on("error", reject);
    });
  } catch (error) {
    console.error(`下载失败 ${filename}: ${error.message}`);
  }
}

// 处理所有服务
async function downloadAllImages() {
  for (const service of services) {
    if (service.imageUrl) {
      await downloadImage(service.imageUrl, service.serviceName);
    } else {
      console.log(`服务 ${service.serviceName} 没有 imageUrl`);
    }
  }
  console.log("所有图片下载完成！");
}

// 执行下载
downloadAllImages();
