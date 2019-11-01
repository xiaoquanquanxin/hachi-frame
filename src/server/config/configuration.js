//  域名
const ORIGIN = 'http://192.168.50.159';
//  端口
const PORT = '3000';
const {resolve} = require('path');
//  网页的位置
const __WEB = resolve(__dirname, '../../../dist/web/');
const __PUBLIC = resolve(__dirname, '../../../public/');
module.exports = {
    ORIGIN,
    PORT,
    __WEB,
    __PUBLIC,

};


