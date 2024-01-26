const axios = require("axios");

axios
  .get({
    method: "get",
    url: "https://hzeronb.saas.hand-china.com/hitf/v2p/rest/invoke/SFpFUk86RE9HX0RBVEFCQVNFOnNxbDM=",
    header: {
      Authorization: "bearer 56c469df-36c2-4b9d-8df7-76526654c082",
    },
  })
  .then((res) => {
    // console.log(res.data);
  })
  .catch((e) => {
    console.log(33, e);
  });
