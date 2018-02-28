const Differencify = require('differencify').default
const differencify = new Differencify()
const colors = require('colors');

module.exports.differencify = differencify

module.exports.diff = async (url) => {
  await differencify
    .init()
    .newPage()
    .goto(url)
    .waitFor(1000)
    .screenshot()
    .toMatchSnapshot()
    .result((pass) => {
      console.log(pass ? colors.green(`${url} pass`) : colors.red(`${url} fail`)) // True or False
    })
    .close()
    .end();
}

module.exports.launch = async () => {
  const executablePath = `C:\\Users\\josh\\AppData\\Local\\Google\\Chrome SxS\\Application\\chrome.exe`
  await differencify.launch({ headless: false, executablePath })
}

module.exports.cleanup = async () => {
  await differencify.cleanup();
}