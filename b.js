const fetch = require("isomorphic-fetch");
let i = 0;

const sendRep = () =>
  fetch(
    "https://hzeronb.saas.hand-china.com/hitf/v2p/rest/invoke/TFpIX0NPREU6TFpIX1RFU1RfMDEyNjpyYW5kb20=",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        authorization: "bearer 6a38363d-62af-4618-a9f9-2a0258c40f70",
        "sec-ch-ua":
          '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
      },
      referrer: "http://localhost:8000/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    }
  )
    .then((res) => res.text())
    .then((res) => console.log(i, "---------", res));
setInterval(() => {
  i++;
  sendRep();
}, 1000 * 10);
