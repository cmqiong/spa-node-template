// server 环境配置
const env = process.env.NODE_ENV;
console.log('~~~~~~~~ env: ' + env + ' ~~~~~~~')

const common = {};

const qa = {
    port: '3002',
    baseURL: 'http://112.74.128.90:8081/',
};

const pro = {
    port: '3003',
    baseURL: 'http://localhost:8081',
};

const local = {
    port: '3001',
    // baseURL: 'http://wx.dev.sunbar.cn:8081/',
    baseURL: 'http://112.74.128.90:8081/',
};

let config;
switch (env) {
    case "production":
        config = Object.assign(pro, common);
        break;
    case "qa":
        config = Object.assign(qa, common);
        break;
    default:
        config = Object.assign(local, common);
        break;
}

export default config;
