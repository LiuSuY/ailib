const puppeteer = require('puppeteer');
// const cheerio = require('cheerio');
// const request = require('request')
const http = require('http')
const https = require('https')
const fs = require('fs');
const path = require('path')

// todo 加载张数限制
// 文件名处理优化

const url = 'https://www.liblib.ai/';

const imgDir = ext => path.resolve(__dirname, 'images', Date.now() + '.' + ext);

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto(url, {
        waitUntil: 'domcontentloaded'
    });

    await page.setViewport({
        width: 1600,
        height: 1000
    })
    await page.waitForSelector('div.mantine-AppShell-root');

    await page.waitForSelector('main.mantine-AppShell-main');


    let imgs = null;
    const loadMore = async () => {
        let timer = true;
        await page.evaluate(async () => {
            await new Promise(async (resolve, reject) => {
                let i = 1;
                timer = setInterval(async () => {
                    if (i == 1000) {
                        resolve(i);
                        clearInterval(timer);
                    }
                    window.scrollTo(0, i * 10);
                    i++;
                }, 100);
            })
        })
    }
    // do {
    await loadMore();

    await page.waitForSelector('main.mantine-AppShell-main div[role="gridcell"] a img');
    imgs = await page.$$eval('main.mantine-AppShell-main div[role="gridcell"] a img', els => Array.from(els).map(el => el.src));
    // } while (imgs.length >= 100)
    // 一次性多加加載几張
    const fileNames = await imgs.map(async (item) => {
        const itemShadow = item;
        if (item.indexOf('data:image/png;base64') != -1) {
            return;
        }
        let fileName = item.substring(item.indexOf('image/') + 6, item.indexOf('?image_process'));
        fileName = fileName.replace('png', 'webp').replace('jpg', 'webp').replace('jpeg', 'webp');
        if (fileName == '?image_process=format,webp&x-oss-process=image/' || fileName == 'https' || fileName == 'http:') {
            return
        }

        await downloadImage(itemShadow, fileName);
        return fileName;
    })

    const fileNamesShadow = [];
    await fileNames.map(item => {
        item.then(res => {
            if (res) {
                fileNamesShadow.push(`http://192.168.2.85:3000/images/${res}`)
            }
        })
    })

    // 保存下载文件路径
    await saveImagesName(fileNamesShadow);



    await browser.close();
})();

const downloadImage = (imagUrl, fileName) => {
    if (fileName.indexOf('.webp') != -1 || fileName.indexOf('.gif') != -1) {
        const mode = /^https:\/\//.test(imagUrl) ? https : http;
        mode.get(imagUrl, (res) => {
            res.pipe(fs.createWriteStream('images/' + fileName))
                .on('finish', (err) => {
                    if (err) {
                        console.error(err)
                    }
                    console.log('pipe finish ...', fileName);
                })
        })
    }

}

const saveImagesName = (fileName) => {
    fs.writeFile('images/dowloadFileNames.txt', fileName.join('\n'), (err) => {
        if (err) {
            console.err(err)
        }
        console.log('txt finish ...');
    })
}