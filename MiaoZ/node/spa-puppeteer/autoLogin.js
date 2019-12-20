const puppeteer = require('puppeteer');
async function run() {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  page.setViewport({
    width: 1376,
    height: 768,
  })
  await page.goto('https://juejin.im/', {
    waitUntil: 'networkidle0'
  })
  await page.click('.login')
  await page.type('.input[name="loginPhoneOrEmail"]', '****')// 账号
  await page.type('.input[name="loginPassword"]', '******')// 密码
  await page.click('.panel .btn')
}
run()