//无头浏览器
//软件自动化测试
//cnpm i puppeteer -S
const puppeteer = require('puppeteer');
async function run() {

  //打开一个浏览器
  const browser = await puppeteer.launch({
    headless:false
  })

  //打开一个网页
  const page = await browser.newPage();

  await page.goto('https://juejin.im/books',{
    waitUntil: 'networkidle0'
  })

  //截一个图
  await page.screenshot({
    path: './books.png'
  })

}
run();