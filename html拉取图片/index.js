const imgUrlList = [
  "https://img1.baidu.com/it/u=2366881981,4252445240&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  "https://img1.baidu.com/it/u=1145316141,933725751&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
  "https://img1.baidu.com/it/u=3541746723,1225005159&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500",
  "https://img2.baidu.com/it/u=3483287315,215415365&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
  "https://img0.baidu.com/it/u=565496759,4123879767&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
  "https://img0.baidu.com/it/u=3172735191,485454533&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img0.baidu.com/it/u=1243898709,3886760539&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
  "https://img0.baidu.com/it/u=911517069,1471872069&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
  "https://img2.baidu.com/it/u=3206603066,1465046031&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
  "https://img2.baidu.com/it/u=1592814543,2545326819&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
  "https://img1.baidu.com/it/u=780755019,1934297431&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
  "https://img2.baidu.com/it/u=1413719999,4037356710&fm=253&fmt=auto&app=138&f=JPEG?w=437&h=657",
  "https://img1.baidu.com/it/u=1898905056,3486655405&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
  "https://img2.baidu.com/it/u=3473893802,3638068942&fm=253&fmt=auto&app=138&f=JPEG?w=357&h=500",
  "https://img0.baidu.com/it/u=2374914181,1777854964&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img2.baidu.com/it/u=669844269,2885168198&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img1.baidu.com/it/u=1598096007,1270206207&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500",
  "https://img0.baidu.com/it/u=157593985,2540641072&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=355",
  "https://img0.baidu.com/it/u=3335769659,3324298501&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
  "https://img1.baidu.com/it/u=2568097818,1937969649&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
  "https://img1.baidu.com/it/u=488905053,3272618055&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
  "https://img0.baidu.com/it/u=3772949226,2132083643&fm=253&fmt=auto&app=138&f=JPEG?w=467&h=350",
  "https://img1.baidu.com/it/u=3672036876,332481303&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
  "https://img2.baidu.com/it/u=2857019676,4267216773&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=631",
  "https://img0.baidu.com/it/u=2902613061,2878940669&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=806",
  "https://img1.baidu.com/it/u=1721054805,237744824&fm=253&fmt=auto&app=138&f=JPEG?w=407&h=500",
  "https://img2.baidu.com/it/u=484801443,938535835&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
  "https://img2.baidu.com/it/u=1537695268,3087490183&fm=253&fmt=auto&app=138&f=JPEG?w=622&h=350",
  "https://img2.baidu.com/it/u=347998715,740002544&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=751",
  "https://img0.baidu.com/it/u=3379311205,3925123090&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=357",
  "https://img1.baidu.com/it/u=1353121964,4217898142&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
  "https://img0.baidu.com/it/u=2399089247,2570784074&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=309",
  "https://img0.baidu.com/it/u=3572506874,1728549903&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  "https://img0.baidu.com/it/u=3286607527,1782286415&fm=253&fmt=auto&app=138&f=JPEG?w=332&h=500",
  "https://img2.baidu.com/it/u=2697159465,1324276183&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=499",
  "https://img2.baidu.com/it/u=892227189,814407577&fm=253&fmt=auto&app=138&f=JPEG?w=526&h=350",
  "https://img2.baidu.com/it/u=3954057972,2695564003&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=500",
  "https://img0.baidu.com/it/u=2990132646,3856931391&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334",
  "https://img1.baidu.com/it/u=4221572739,1064004635&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=681",
  "https://img1.baidu.com/it/u=434011567,1277973311&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  "https://img0.baidu.com/it/u=2257055293,521441192&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375",
  "https://img2.baidu.com/it/u=2917954773,3673229607&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=747",
  "https://img0.baidu.com/it/u=4001196460,3485138255&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
  "https://img1.baidu.com/it/u=2278151434,3955521978&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
  "https://img0.baidu.com/it/u=3580258860,1885441215&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
  "https://img2.baidu.com/it/u=2685553367,2917617192&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img0.baidu.com/it/u=2404956573,1500666701&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
  "https://img1.baidu.com/it/u=4271000649,822518551&fm=253&fmt=auto&app=138&f=PNG?w=543&h=500",
  "https://img2.baidu.com/it/u=2335687829,278500992&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
  "https://img0.baidu.com/it/u=2189460035,1181171225&fm=253&fmt=auto&app=138&f=JPEG?w=900&h=500",
];
// console.log(imgUrlList);

const fetch = require("isomorphic-fetch");
const fs = require("fs");
const path = require("path"); // 引入文件路径模块

const filePath = path.resolve(__dirname); // 定义文件路径

const getImg = async (url) => {
  const res = await fetch(url);
  console.log();
  const type = "." + res.headers.get("Content-Type")?.split("/")?.[1] || ".jpg";

  const arrayBuffer = await res.arrayBuffer();
  const writeData = Buffer.from(arrayBuffer);

  fs.writeFile(
    filePath + "/imgs/" + `${randomStr()}${type}`,
    writeData,
    (err) => {
      if (err) {
        console.error("写入文件时发生错误:", err);
      } else {
        console.log("数据已写入文件:", filePath);
      }
    }
  );
};

function randomStr(
  length = 6,
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) {
  let result = "";
  const charactersLength = chars.length;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let index = 0;
const retry = async () => {
  const url = imgUrlList[index];
  index++;
  await getImg(url);
  if (index < imgUrlList.length - 1) {
    retry();
  }
};
retry();
