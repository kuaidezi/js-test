const axios = require("axios");

const cheerio = require("cheerio");

const url =
  "https://www.pkdoutu.com/search?keyword=%E7%94%84%E5%AD%90%E4%B8%B9";

axios.get(url).then((res) => {
  const $ = cheerio.load(res.data);

  $("a").each((i, t) => {
    console.log($(t).text());
  });
});
