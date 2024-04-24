const QRCode = require('qrcode');

let website = 'www.google.com'

QRCode.toString(website, {type:'terminal'}, (err,url) => {
    if(err){
        console.error(err)
    }
    else{
        console.log(url)
    }
})