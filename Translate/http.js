const axios = require("axios");
const crypto = require("crypto");
const querystring = require("querystring");

const APPID = "20220926001354842";
const SECRET_KEY = "waK5uONhq8GRkV0u1cpl";

function fetchTranslateWord(q) {
  if (!q || q?.length < 1) {
    return Promise.reject(false);
  }
  const salt = Math.floor(Math.random() * 100000);
  const signString = APPID + q + salt + SECRET_KEY;
  const sign = crypto
    .createHash("md5")
    .update(signString, "utf8")
    .digest("hex");

  const queryParams = querystring.stringify({
    q: q,
    from: "auto",
    to: "en",
    appid: APPID,
    salt: salt,
    sign: sign,
  });

  const url =
    "http://api.fanyi.baidu.com/api/trans/vip/translate?" + queryParams;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        const {
          trans_result: [{ dst }],
        } = res.data;
        dst ? resolve(dst) : reject();
      })
      .catch((e) => reject(e));
  });
}

module.exports = { fetchTranslateWord };
