import { baseUrl } from "./img.js";
 

let imgData = baseUrl.url;

convertImageUrlToBase64();

function convertImageUrlToBase64() {
  //url 64 bit resmin kodunu tutar

  let nameDetail = null,name=null,surname=null,prefix='BEN';

  let isim = localStorage.getItem("name")
  let sehir = localStorage.getItem("city")
  isim =  turkishToUpper(isim);
  sehir= cityUpperCase(sehir)

  //localde kayıtlı isimi ad ve soyada bölme
  // if (isim) {
  //   nameDetail = isim.split(" ");
  //   if (nameDetail.length > 1) {
  //     surname = nameDetail.splice(-1, 1).join(" ");
  //     name = nameDetail.join(" ");
  //   }else{
  //     surname=''
  //     name=nameDetail[0]
  //   }
  // }



  //////////

  const pageImage = new Image();
  pageImage.src = imgData;
  pageImage.onload = function () {
    const canvas = document.querySelector("canvas");
    canvas.width = pageImage.naturalWidth;
    canvas.height = pageImage.naturalHeight;

    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pageImage, 0, 0);
    // ctx.shadowBlur = 5;
    // ctx.shadowOffsetX = 6;
    ctx.fillStyle = "black";
    ctx.shadowColor = "black";

    ctx.font = "700 42px Arial";

    ctx.textAlign = "center"; 
    ctx.fillText(` Ben ${isim}` , canvas.width / 5, 250); 

    ctx.fillText(sehir, canvas.width / 5, 980);
    console.log("canvas", canvas);
    saveScreenshot(canvas);
  };

  function saveScreenshot(canvas) {
    let fileName = "image";
    const link = document.createElement("a");
    link.download = fileName + ".png";

    canvas.toBlob(function (blob) {
      console.log("blob", blob);
      link.href = URL.createObjectURL(blob);
      console.log("link.download", link);

      link.click();
    });
  }
  //////////
}
//açılır açılmaz ekrana boyutu bassın
resize();

function resize() {
  var canvas = document.querySelector("canvas");
  var canvasRatio = 4800 / 3490;
  var windowRatio = window.innerHeight / window.innerWidth;
  var width;
  var height;

  if (windowRatio < canvasRatio) {
    height = window.innerHeight;
    width = height / canvasRatio;
  } else {
    width = window.innerWidth;
    height = width * canvasRatio;
  }

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
}


  //buyuk harfe donustur
  function turkishToUpper (val){
    var string = val;
    var letters = {
      i: "İ",
      ş: "Ş",
      ğ: "Ğ",
      ü: "Ü",
      ö: "Ö",
      ç: "Ç",
      ı: "I",
    };
    string = string.replace(/(([iışğüçö]))/g, function (letter) {
      return letters[letter];
    });


  var splitStr = string.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) { 
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' ');  

   // return string.toUpperCase();
   //return string.charAt(0).toUpperCase() + string.slice(1);
  };


  function cityUpperCase(val){
    var string = val;
    var letters = {
      i: "İ",
      ş: "Ş",
      ğ: "Ğ",
      ü: "Ü",
      ö: "Ö",
      ç: "Ç",
      ı: "I",
    };
    string = string.replace(/(([iışğüçö]))/g, function (letter) {
      return letters[letter];
    });

    return string.toUpperCase();

  }