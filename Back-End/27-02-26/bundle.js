var QRCode = require('qrcode')

QRCode.toString('BackEnd I',{type:'terminal'}, function (err, url) {
  console.log(url)
})