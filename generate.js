const args = require('args')
const fs = require('fs-extra')
args.option('crawl', 'The base url to test', '')

const flags = args.parse(process.argv);

(async () => {
  if (flags.crawl) {
    const baseUrl = flags.crawl
    const crawlAll = await require('./crawl')()
    const urls = await crawlAll(baseUrl)
    await fs.writeJson('tests/config.json', {
      baseUrl,
      urls,
    })
    console.log(urls)
  }
})()