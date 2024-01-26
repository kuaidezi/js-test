const xml2js = require("xml2js");
const xmlString =
  "<root><element1><value>value1</value></element1><element1><value>value1</value></element1><element2><value>value2</value></element2></root>";

// xml2js.parseString(xmlString, { explicitArray: false }, (err, result) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(JSON.stringify(result));
//   }
// });

xml2js
  .parseStringPromise(xmlString, { explicitArray: false })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    // Failed
  });
