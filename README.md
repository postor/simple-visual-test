# simple visual test

make visual test simple | 让显示测试更简单

## prepare | 准备

```
git clone https://github.com/postor/simple-visual-test.git
cd simple-visual-test
npm install
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

## test | 运行测试

```
npm run test
```

[screenshot](./images/screenshot.png)