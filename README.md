# simple visual test

make visual test simple | 让显示测试更简单

simple path | 最简使用

```
git clone https://github.com/postor/simple-visual-test.git
cd simple-visual-test
npm install
node generate.js --crawl=https://im.qq.com/
npm run update

# run this every day and get the change when it happen | 每天运行这一段就能获得网站的显示更新
npm run test
```


## prepare | 准备

```
git clone https://github.com/postor/simple-visual-test.git
cd simple-visual-test
npm install
```
if you are inside GFW, you may have problem installing puppeteer, you need to | 如果在国内，可能是没法正常安装puppeteer的，你需要:

- set environment varible  `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD` to `true` | 设置环境变量 `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD` 为 `true`
- add a `launch.json` in `simple-visual-test` folder and set value `executablePath` to your chrome.exe path | 在 `simple-visual-test` 目录下增加 `launch.json` 文件，并设置 `executablePath` 的值为你的 chrome.exe 的完整路径

launch.json, you can add other launch options refer https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions 

launch.json, 你可以添加其他的启动参数，参考 https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions 

```
{
  "executablePath":"C:\\Users\\josh\\AppData\\Local\\Google\\Chrome SxS\\Application\\chrome.exe",
}
```

## generate config | 生成配置

you can generate through `node generate.js --crawl=[baseUrl]`, this will recursively crawl the page and fill config with links under the baseUrl 

你可以通过`node generate.js --crawl=[baseUrl]`来生成配置，它会自递归动抓取页面中的链接并将域下的链接填入配置

```
node generate.js --crawl=https://im.qq.com/
```

or you know urls to test, then just write `tests/config.json` like

或者自己写一个`tests/config.json`

```
{
  "urls":["https://im.qq.com/"]
}
```

## update snapshots | 更新截图

```
npm run update
```

you can use your design replace images in `tests\__image_snapshots__` and perform TDD

或者你可以用你的设计图替换

## test | 运行测试

```
npm run test
```

![screenshot](./images/screenshot.png)