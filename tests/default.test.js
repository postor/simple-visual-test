
const Differencify = require('differencify').default
const { baseUrl, urls } = require('./config')
const launchConfig = require('./launch') || {}

describe('url-', () => {
  urls.forEach(async (url, i) => {
    it(url.replace(/\W/g, ''), async () => {
      //const executablePath = `C:\\Users\\josh\\AppData\\Local\\Google\\Chrome SxS\\Application\\chrome.exe`
      const differencify = new Differencify()
      const target = differencify.init({ testName: `t${i}`, chain: false });
      const browser = await target.launch(launchConfig)
      const page = await browser.newPage()
      await page.goto(url)
      const image = await page.screenshot({ fullPage: true })
      const result = await target.toMatchSnapshot(image)
      expect(result).toBe(true)
      await page.close()
      await browser.close()
      await differencify.cleanup()
    }, 60000)
  })
})
