# simple visual test

make visual test simple | 让显示测试更简单

simple path

```
git clone https://github.com/postor/simple-visual-test.git
cd simple-visual-test
npm install
node generate.js --crawl=https://im.qq.com/
npm run update

# after site change, test can detect
npm run test
```


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

you can use your design replace images in `tests\__image_snapshots__` and perform TDD

或者你可以用你的设计图替换

## test | 运行测试

```
npm run test
```

![screenshot](./images/screenshot.png)