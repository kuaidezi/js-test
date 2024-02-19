const fileSaverScript = document.createElement("script");
fileSaverScript.src =
  "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js";
document.head.appendChild(fileSaverScript);

const html2canvasScript = document.createElement("script");
html2canvasScript.src =
  "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.head.appendChild(html2canvasScript);

const downloadHtml = function (ele) {
  html2canvas(ele || document.querySelector("body"), {
    useCORS: true,
  }).then(function (canvas) {
    canvas.toBlob(function (blob) {
      saveAs(blob, new Date().getTime() + ".png");
    });
  });
};
