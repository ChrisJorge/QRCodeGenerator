var QRCode = require('qrcode')

QRCode.toString('www.google.com', {type: 'terminal'}, (err,url) => {
    console.log(url)
})